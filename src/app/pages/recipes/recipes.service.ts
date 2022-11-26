import { Injectable } from '@angular/core';
import {Recipe} from "./recipe";

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor() { }

  findEnabledRecipes(): Recipe[] {
    return [{slug: "chocolate", name: "Chocolate recipe", description: "It was found online"}, {slug: "vanilla", name: "Vanilla recipe", description: "I actually copy-pasted it"}]
  }

  getRecipeBySlug(slug: String): Recipe {
    return this.findEnabledRecipes().filter(recipe => recipe.slug === slug)[0];
  }
}
