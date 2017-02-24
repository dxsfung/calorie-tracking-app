import { Component } from '@angular/core';
import { FoodItem } from './fooditem.model';

@Component({
    selector: 'my-app',
    template: `
    <div class="container">
    <h2>Calorie-Tracking-App</h2>

    <food-list
      [childFoodList]="masterFoodList"
      (clickSender)="showDetails($event)"
      (deleteSender)="deleteDetails($event)"
    ></food-list>

    <edit-food
      [childSelectedFood]="selectedFood"
      (doneClickedSender)="finishedEditing()"
    ></edit-food>

    <new-food
      (newFoodSender)="addFood($event)"
    ></new-food>

      </div>
  `
})

export class AppComponent {

    public masterFoodList: FoodItem[] = [
        new FoodItem("Hamburger", "Didn't get a soda or cheese on my burger!", 354),
        new FoodItem("Fries", "I only ate half of them", 365),
    ];

    selectedFood: FoodItem = null;
    showDetails (clickedFood: FoodItem) {
        this.selectedFood = clickedFood;
    }
    deleteDetails (clickedFood: FoodItem) {
        var a = this.masterFoodList.indexOf(clickedFood);
        this.masterFoodList.splice(a, 1);
    }
    finishedEditing () {
        this.selectedFood = null;
    }
    addFood (newFoodFromChild: FoodItem) {
        this.masterFoodList.push(newFoodFromChild);
    }

}
