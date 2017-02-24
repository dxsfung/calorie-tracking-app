import {Pipe, PipeTransform} from '@angular/core';
import {FoodItem} from './fooditem.model';

@Pipe({
  name: "foodcategory",
  pure: false
})
export class FoodCategoryPipe implements PipeTransform {
  transform(input: FoodItem[], desiredCategory) {
    var output: FoodItem[] = [];
    if(desiredCategory === "low") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories < 500) {
        output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCategory === "high") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories > 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
