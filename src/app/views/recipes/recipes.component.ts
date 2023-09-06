import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent {
 activeRecipe: Recipe;

  // updateRecipe(recipe: Recipe) {
  //   this.activeRecipe = recipe;
  // }
}
