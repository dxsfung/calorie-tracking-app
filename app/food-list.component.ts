import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FoodItem } from './fooditem.model';

@Component({
    selector: 'food-list',
    template: `
    <select (change)= "onChange ($event.target.value)"  class="filter">
    <option value="all" selected="selected">Show All Food</option>
    <option value="high">Show High-calorie Food</option>
    <option value="low">Show Low-calorie Food</option>
    </select>
    <div *ngFor="let currentFood of childFoodList | foodcategory : selectedFoodCategory">
       <food-display [food]="currentFood"></food-display>
       <button (click)="editButtonHasBeenClicked(currentFood)">Edit</button>
       <button (click)="deleteButtonClicked (currentFood)">Delete</button>
    </div>


       `
})

export class FoodListComponent {

    @Input() childFoodList: FoodItem[];
    @Output() clickSender = new EventEmitter();
    @Output() deleteSender = new EventEmitter();

    public selectedFoodCategory: string = "all";

editButtonHasBeenClicked(foodToEdit: FoodItem) {
    this.clickSender.emit(foodToEdit);
}
deleteButtonClicked(foodTodelete: FoodItem) {
    this.deleteSender.emit(foodTodelete);
}
onChange(optionFromFood) {
    this.selectedFoodCategory = optionFromFood;
}
}
