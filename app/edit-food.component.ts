import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FoodItem } from './fooditem.model';

@Component({
  selector: 'edit-food',
  template: `
    <div *ngIf="childSelectedFood">
      <h1>Edit Food</h1>
      <div>
        <label>Enter Food Name:</label>
        <input [(ngModel)]="childSelectedFood.name">
      </div>
      <div>
        <label>Enter Food Details:</label>
        <input [(ngModel)]="childSelectedFood.details">
      </div>
      <div>
      <div>
        <label>Enter Food Calories:</label>
        <input [(ngModel)]="childSelectedFood.calories">
      </div>
        <button (click)="doneClicked()">Done</button>
      </div>
    </div>
  `
})

export class EditFoodComponent {
  @Input() childSelectedFood: FoodItem;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
