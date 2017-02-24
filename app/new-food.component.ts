import { Component, Output, EventEmitter } from '@angular/core';
import { FoodItem } from './fooditem.model';

@Component({
    selector: 'new-food',
    template: `
    <h3>New Food</h3>
<div>
  <label>Enter Food Name:</label>
  <input #newFoodName>
</div>
<div>
  <label>Enter Food Details:</label>
  <input #newFoodDetails>
</div>
<div>
  <label>Enter Food Calories:</label>
  <input #newFoodCalories>
</div>

<button (click)="
addClicked(newFoodName.value, newFoodDetails.value, newFoodCalories.value);
newFoodName.value='';
newFoodDetails.value='';
newFoodCalories.value='';
 ">Add</button>

  `
})

export class NewFoodComponent {
  @Output() newFoodSender = new EventEmitter();
  addClicked(name: string, details: string, calories: number) {
    var newFoodToAdd: FoodItem = new FoodItem(name, details, calories);
    this.newFoodSender.emit (newFoodToAdd);
  }}
