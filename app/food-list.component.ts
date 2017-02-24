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
    <div *ngFor="let currentFood of childFoodList"  >
       <food-display [food]="currentFood"></food-display>

    </div>

    <!-- temp off
    <div *ngFor="let currentTask of childTaskList | completeness:selectedFoodCategory"  >
       <task-display [task]="currentTask"></task-display>
       <button (click)="editButtonHasBeenClicked(currentTask)">Edit</button>
       <button (click)="deleteButtonClicked (currentTask)">Delete</button>
    </div>
    -->

       `
})

export class FoodListComponent {

    @Input() childFoodList: FoodItem[];
/*
    @Output() clickSender = new EventEmitter();
    @Output() deleteSender = new EventEmitter();
    */

    public selectedFoodCategory: string = "all";

/*
    editButtonHasBeenClicked(taskToEdit: Task) {
        this.clickSender.emit(taskToEdit);
    }
    deleteButtonClicked(taskTodelete: Task) {
        this.deleteSender.emit(taskTodelete);
    }
    */
    onChange(optionFromFood) {
        console.log (this.selectedFoodCategory);
        console.log (optionFromFood);
        this.selectedFoodCategory = optionFromFood;
        console.log (this.selectedFoodCategory);
    }
}
