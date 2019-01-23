import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
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

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
