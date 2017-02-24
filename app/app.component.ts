import { Component } from '@angular/core';
import { FoodItem } from './fooditem.model';

@Component({
    selector: 'my-app',
    template: `
    <div class="container">
    <h1>Calorie-Tracking-App</h1>
    <food-list
      [childFoodList]="masterFoodList"
    ></food-list>
<!-- from taskList
    <task-list
      [childTaskList]="masterTaskList"
      (clickSender)="showDetails($event)"
      (deleteSender)="deleteDetails($event)"
     ></task-list>
    <edit-task
      [childSelectedTask]="selectedTask"
      (doneClickedSender)="finishedEditing()"
    ></edit-task>
    <new-task
      (newTaskSender)="addTask($event)"
    ></new-task>
    -->
      </div>
  `
})

export class AppComponent {

     public masterFoodList: FoodItem [] = [
       new FoodItem ("Hamburger", "Didn't get a soda or cheese on my burger!", 354),
       new FoodItem ("Fries", "I only ate half of them", 365),
     ];

    /*
        public masterTaskList: Task[] = [
          new Task ("Create to-Do List App.",0),
          new Task ("do shopping",1),
        ];


        selectedTask: Task = null;
        showDetails(clickedTask: Task) {
            this.selectedTask = clickedTask;
        }
        deleteDetails(clickedTask: Task) {
            var a = this.masterTaskList.indexOf(clickedTask);
            this.masterTaskList.splice(a, 1);
        }
        finishedEditing() {
            this.selectedTask = null;
        }
        addTask(newTaskFromChild: Task) {
            this.masterTaskList.push(newTaskFromChild);
        }
    */

}
