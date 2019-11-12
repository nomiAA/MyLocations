import { Injectable } from '@angular/core';
import { Category } from '../model/category';

@Injectable({
	providedIn: 'root'
})
export class CategoriesService {
	categories: Category[];

	constructor() {
		this.loadCategories();
	}

	loadCategories(): void {
		this.categories = [
			new Category("North"),
			new Category("East"),
			new Category("West")
		];
	};

	getCategories(): Promise<Category[]> {
		return new Promise((resolve) => {
			resolve(this.categories);
		});
	};

	removeCategory(category: Category): Promise<Object> {
		var me = this;
		return new Promise((resolve) => {
			me.categories = me.categories.filter(obj => obj !== category);
			resolve();
		});
	};

	addCategory(category: Category): Promise<Object> {
		return new Promise((resolve) => {
			this.categories.push(category);
			resolve();
		});
	};

}
