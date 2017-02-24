import { Component, Input } from '@angular/core';
import { FoodItem } from './fooditem.model';

@Component({
  selector: 'food-display',
  template: `
  <div>
<!--
    <input *ngIf="task.done === true" type="checkbox" checked (click)="toggleDone(false)"/>
    <input *ngIf="task.done === false" type="checkbox" (click)="toggleDone(true)"/>
-->
<p>---------</p>
<p>Name: {{ food.name }}</p>
<p>Details: {{ food.details }}</p>
<p>Calories: {{ food.calories }}</p>
<p>---------</p>
  </div>
  `
})
export class FoodDisplayComponent {
  @Input() food: FoodItem;
  /*
  toggleDone(setCompleteness: boolean) {
    this.task.done = setCompleteness;
    */
  }
