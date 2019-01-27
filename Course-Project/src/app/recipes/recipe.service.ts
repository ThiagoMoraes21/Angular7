import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'As the name suggests it is a test recipe. Dah! It is a long established fact that a reader will be distracted by',
      'https://source.unsplash.com/Pt_YmiYm7a4'
    ),
    new Recipe(
      'Test Recipe 2',
      `It is a long established fact that a reader will be distracted by the readable content of a page when looking.`,
      'https://source.unsplash.com/bpPTlXWTOvg'
    )];

  constructor() { }

  getRecipes() {
    //  Return a copy of the recipes array with slice() method
    //  that way, the original array can't be modified
    return this.recipes.slice();
  }
}
