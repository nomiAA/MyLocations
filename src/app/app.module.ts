import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { NavHeaderComponent } from './core/nav-header/nav-header.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { NewCategoryComponent } from './new-category/new-category.component';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ChartModule } from 'angular2-chartjs';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    SidebarComponent,
    NavHeaderComponent,
    HomeComponent,
    NewCategoryComponent,
    ViewCategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    ChartModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
