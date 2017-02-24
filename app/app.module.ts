import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { FoodListComponent }   from './food-list.component';
import { FoodDisplayComponent }   from './food-display.component';
import { EditFoodComponent } from './edit-food.component';
import { NewFoodComponent } from './new-food.component';
import { FoodCategoryPipe } from './foodcategory.pipe';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        FoodListComponent,
        FoodDisplayComponent,
        EditFoodComponent,
        NewFoodComponent,
        FoodCategoryPipe,
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
