import { Injectable } from '@angular/core';
import { StockPrice } from '../model/stock-price';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class StockService {

  stocksUrl = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=demo";

  constructor(private http: Http) { }

  getStocksData(): Observable<any> {
    return this.http.get(`${this.stocksUrl}`)
      .pipe(
        map((response: Response) => <any>response.json()
        ) 
      );
  }
}
