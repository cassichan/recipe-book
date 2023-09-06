import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    // new Recipe(
    {
      name: 'A Test Recipe',
      description: 'This is simply a test',
      imagePath:
        'https://cdn.pixabay.com/photo/2017/11/16/18/51/kagyana-2955466_640.jpg',
      // ),
    },
    // new Recipe(
    {
      name: 'Another Test Recipe',
      description: 'This is simply another test',
      imagePath:
        'https://cdn.pixabay.com/photo/2015/10/26/07/21/vegetables-1006694_640.jpg',
    },
    // ),
  ];

  updateRecipe(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
