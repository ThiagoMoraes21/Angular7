import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'As the name suggests it is a test recipe. Dah! It is a long established fact that a reader will be distracted by',
      'https://source.unsplash.com/Pt_YmiYm7a4',
      [
        new Ingredient('Rice', 1),
        new Ingredient('Potato', 3),
        new Ingredient('Tomato', 2),
        new Ingredient('Onion', 1)
      ]
    ),
    new Recipe(
      'Test Recipe 2',
      `It is a long established fact that a reader will be distracted by the readable content of a page when looking.`,
      'https://source.unsplash.com/bpPTlXWTOvg',
      [
        new Ingredient('Fish', 2),
        new Ingredient('Vegetables', 3),
        new Ingredient('Tomato', 2),
        new Ingredient('Onion', 1),
        new Ingredient('Limon', 1)
      ]
    )];

  constructor() { }

  getRecipes() {
    //  Return a copy of the recipes array with slice() method
    //  that way, the original array can't be modified
    return this.recipes.slice();
  }
}
