import { Injectable } from '@angular/core';
import {Recipe} from "./recipe";

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor() { }

  findEnabledRecipes(): Recipe[] {
    // TODO: Find a way to just read or generate this from the markdown
    return [
      {slug: "burgundarkassa", name: "Búrgundarkássa", description: "Rauðvín, nautakjöt og perlulaukar"},
      {slug: "carnitas", name: "Carnitas", description: "Hægeldað svínakjöt fyrir tortillur"},
      {slug: "kjotsosa", name: "Kjötsósa", description: "\"Bolognese\" kjötsósa fyrir hraðsuðupott"},
      {slug: "paella", name: "Paella", description: "Sjávarréttahrísgrjónamix"},
      {slug: "saetkartoflu-chorizo-chili", name: "Sætkartöflu chorizo chili", description: "Chili-kássa með sætum kartöflum og baunum"},
    ]
  }

  getRecipeBySlug(slug: String): Recipe {
    return this.findEnabledRecipes().filter(recipe => recipe.slug === slug)[0];
  }
}
