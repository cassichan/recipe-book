import { Component } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://cdn.pixabay.com/photo/2017/11/16/18/51/kagyana-2955466_640.jpg'
    ),
    // new Recipe(
    //   'Another Test Recipe',
    //   'This is simply another test',
    //   'https://cdn.pixabay.com/photo/2015/10/26/07/21/vegetables-1006694_640.jpg'
    // ),
  ];
}
