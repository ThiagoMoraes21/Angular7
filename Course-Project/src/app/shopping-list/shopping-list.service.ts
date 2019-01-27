import { Injectable,  EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChange = new EventEmitter<Ingredient[]>();
  private  ingredients: Ingredient[] = [
      new Ingredient('potato', 5),
      new Ingredient('tomato', 2)
    ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();   //  Return a copy of the array
  }

  // Add sigle a ingredient at a time
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChange.emit(this.ingredients.slice());
  }

  // Add multiple ingredients
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChange.emit(this.ingredients.slice());
  }
}
