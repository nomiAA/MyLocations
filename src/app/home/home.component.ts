
import 'chartjs-plugin-annotation';
import { ChartComponent } from 'angular2-chartjs';
import 'chartjs-plugin-datalabels'

import { ViewChild, Component, ElementRef, OnInit } from '@angular/core';
import { StockService } from '../services/stocks.service';
import { StockPrice } from '../model/stock-price';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  @ViewChild('chart', { static: true }) chartComponent: ChartComponent;
  title: string = "Stock Statistics";
  public stockPrices: StockPrice[]
  treshholdVal: number = 50;

  constructor(private stockService: StockService) { }

  public barChartOptions: any = {
    annotation: {
      events: ["click"],
      annotations: [{
        drawTime: "afterDatasetsDraw",
        id: "hline",
        type: "line",
        mode: "horizontal",
        scaleID: "y-axis-0",
        value: this.treshholdVal,
        borderColor: "black",
        borderWidth: 1,
        label: {
          backgroundColor: "#dc3545",
          content: "Treshhold line",
          enabled: true
        }
      }]
    },
    responsive: true
  }

  public barChartType: string = 'line';

  public barChartData = {
    labels: [],
    datasets: [
      {
        label: "Open Price",
        fill: true,
        data: [],
        backgroundColor: "rgba(207,245,255,0.2)",
        borderColor: "rgba(207,245,255,1)",
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: "rgba(220,220,220,1)",
        pointRadius: 12,
        pointBorderWidth: 1,
        pointHoverRadius: 12,
        pointHoverBackgroundColor: "rgba(220,220,220,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        tension: 0.1
      }
    ],

  };
  //change value line
  public addNewBarValue(): void {
    this.chartComponent.chart.annotation.elements['hline'].options.value = this.treshholdVal;
    let meta = this.chartComponent.chart.getDatasetMeta(0);

    for (var i = 0; i < this.barChartData.datasets[0].data.length; i++) {
      let point = meta.data[i];
      point.custom = point.custom || {};

      if (this.barChartData.datasets[0].data[i] > this.treshholdVal) {//if the price exceeds the treshhold line
        point.custom.backgroundColor = "#5cd7e3";//bold background
        point.custom.borderColor = "#5cd7e3";
      }
      else {
        point.custom.backgroundColor = "rgba(207,245,255,0.2)";
        point.custom.borderColor = "rgba(207,245,255,1)";
      }
    }

    this.chartComponent.chart.update();
  }

  ngOnInit() {
    this.stockService.getStocksData()
      .subscribe((obj) => {
        this.stockPrices = Object.keys(obj["Time Series (5min)"]).map(function (key) {
          return new StockPrice(key, obj["Time Series (5min)"][key]["1. open"])
        });

        for (var i = 0; i < this.stockPrices.length; i += 6) {//every half hour
          this.barChartData.labels.push(this.stockPrices[i].date)
          this.barChartData.datasets[0].data.push(Math.floor(Math.random() * 150))
          //prices were equal on all dates so I used "random prices"
        }
        this.chartComponent.chart.update();
      })
  }
}
