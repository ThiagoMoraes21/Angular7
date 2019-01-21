import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'As the name suggests it is a test recipe. Dah!',
      'https://source.unsplash.com/Pt_YmiYm7a4'
    ),
    new Recipe(
      'Test Recipe',
      'As the name suggests it is a test recipe. Dah!',
      'https://source.unsplash.com/Pt_YmiYm7a4'
    )];

  constructor() { }

  ngOnInit() {
  }

}
