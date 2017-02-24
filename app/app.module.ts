import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { FoodListComponent }   from './food-list.component';
import { FoodDisplayComponent }   from './food-display.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        FoodListComponent,
        FoodDisplayComponent,
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
