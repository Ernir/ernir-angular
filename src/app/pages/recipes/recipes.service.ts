import { Injectable } from '@angular/core';
import { Recipe } from './models/recipe';
import { RecipeFile } from './models/recipeFile';
// @ts-ignore
import recipesJson from '../../../assets/recipes/recipes.json';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  constructor() {}

  findEnabledRecipes(): Recipe[] {
    return recipesJson.map((recipeFile: RecipeFile) =>
      RecipesService.toRecipe(recipeFile)
    );
  }

  private static toRecipe(recipeFile: RecipeFile): Recipe {
    const name = recipeFile.data.name;
    const description = recipeFile.data.description;
    const pathComponents = recipeFile.path
      .replace('/src', '')
      .replace('.md', '')
      .split('/');
    const slug = pathComponents[pathComponents.length - 1];
    const content = recipeFile.content;
    return {
      name: name,
      description: description,
      slug: slug,
      content: content,
    };
  }

  getRecipeBySlug(slug: String): Recipe {
    return this.findEnabledRecipes().filter(
      (recipe) => recipe.slug === slug
    )[0];
  }
}
