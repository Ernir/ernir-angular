import {Injectable} from '@angular/core';
import {Recipe} from "./models/recipe";
import {RecipeFile} from "./models/recipeFile";
// @ts-ignore
import recipesJson from '../../../assets/recipes/recipes.json'

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor() {
  }

  findEnabledRecipes(): Recipe[] {
    const recipes = recipesJson.map((recipe: { data: { name: string, description: string }, content: string, path: string }) => recipe);
    const oldRecipes = [
      {slug: "burgundarkassa", name: "Búrgundarkássa", description: "Rauðvín, nautakjöt og perlulaukar"},
      {slug: "carnitas", name: "Carnitas", description: "Hægeldað svínakjöt fyrir tortillur"},
      {slug: "hnetukassa", name: "Hnetukássa", description: "Hnetusmjörs- og sætkartöflukássa"},
      {slug: "kjotsosa", name: "Kjötsósa", description: "\"Bolognese\" kjötsósa fyrir hraðsuðupott"},
      {slug: "lambahakkbollur", name: "Lambahakkbollur", description: "Lambahakkbollur í Napólí-sósu með halloumi"},
      {slug: "paella", name: "Paella", description: "Sjávarréttahrísgrjónamix"},
      {
        slug: "saetkartoflu-chorizo-chili",
        name: "Sætkartöflu chorizo chili",
        description: "Chili-kássa með sætum kartöflum og baunum"
      },
      {slug: "sjaksjuka", name: "Sjaksjúka", description: "Grænt sjaksjúka með spínati og kúrbít"},
      {slug: "truffluorzo", name: "Truffluorzo", description: "Orzo með trufflum og parmesan"},
    ]
    return recipesJson.map((recipeFile: RecipeFile) => RecipesService.toRecipe(recipeFile));
  }

  private static toRecipe(recipeFile: RecipeFile): Recipe {
    const name = recipeFile.data.name;
    const description = recipeFile.data.description;
    const path = recipeFile.path.replace("/src", "");
    const pathComponents = path.split("/");
    const slug = pathComponents[pathComponents.length - 1].replace(".md", "")
    const content = recipeFile.content;
    return {
      name: name, description: description, slug: slug, path: path, content: content
    }
  }

  getRecipeBySlug(slug: String): Recipe {
    return this.findEnabledRecipes().filter(recipe => recipe.slug === slug)[0];
  }
}
