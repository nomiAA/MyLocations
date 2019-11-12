import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { NewCategoryComponent } from './new-category/new-category.component';
import { ViewCategoryComponent } from './view-category/view-category.component';


const routes: Routes = [
  { path: '', redirectTo: '/categories', pathMatch: 'full' },
  { path: 'categories', component: CategoriesComponent },
  { path: 'categories/new-category', component: NewCategoryComponent },
  { path: 'home', component: HomeComponent },
  { path: 'categories/view/:categoryName', component: ViewCategoryComponent },
];

const config: ExtraOptions = {
  useHash: true,
  onSameUrlNavigation: 'reload'
 }; 
 

@NgModule({
  imports: [RouterModule.forRoot(routes,config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
