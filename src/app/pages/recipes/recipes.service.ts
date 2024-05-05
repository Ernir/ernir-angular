import { Injectable } from "@angular/core";
import { Recipe } from "./models/recipe";
import { RecipeFile } from "./models/recipeFile";
// @ts-ignore
import recipesJson from "../../../assets/recipes/recipes.json";
import { RecipeTag } from "./models/recipetag";

@Injectable({
  providedIn: "root"
})
export class RecipesService {
  constructor() {}

  findRecipes(): Recipe[] {
    return recipesJson.map((recipeFile: RecipeFile) => RecipesService.toRecipe(recipeFile));
  }

  findActiveRecipes(tagName: string): Recipe[] {
    return this.findRecipes().filter(recipe =>
      recipe.tags.map(tag => tag.toLowerCase()).includes(tagName.toLowerCase())
    );
  }

  private static toRecipe(recipeFile: RecipeFile): Recipe {
    const name = recipeFile.data.name;
    const description = recipeFile.data.description;
    const pathComponents = recipeFile.path.replace("/src", "").replace(".md", "").split("/");
    const slug = pathComponents[pathComponents.length - 1];
    const content = recipeFile.content;
    const tags = recipeFile.data.tags;
    return {
      name: name,
      description: description,
      slug: slug,
      content: content,
      tags: tags
    };
  }

  findRecipeTags(): RecipeTag[] {
    let tagCounts = new Map<string, number>();
    this.findRecipes().forEach(recipe =>
      recipe.tags.forEach(tag => {
        let existingTag = tagCounts.get(tag);
        if (existingTag) {
          tagCounts.set(tag, ++existingTag);
        } else tagCounts.set(tag, 1);
      })
    );
    let recipeTags: RecipeTag[] = [];
    for (let [name, count] of tagCounts) {
      recipeTags.push({ name: name, count: count });
    }
    return recipeTags;
  }

  getRecipeBySlug(slug: String): Recipe {
    return this.findRecipes().filter(recipe => recipe.slug === slug)[0];
  }
}
