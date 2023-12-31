import { Component, Input } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent {
  @Input() selectedRecipe: Recipe;

  showRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }
}
