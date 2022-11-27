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
      {slug: "hnetukassa", name: "Hnetukássa", description: "Hnetusmjörs- og sætkartöflukássa"},
      {slug: "kjotsosa", name: "Kjötsósa", description: "\"Bolognese\" kjötsósa fyrir hraðsuðupott"},
      {slug: "lambahakkbollur", name: "Lambahakkbollur", description: "Lambahakkbollur í Napólí-sósu með halloumi"},
      {slug: "paella", name: "Paella", description: "Sjávarréttahrísgrjónamix"},
      {slug: "saetkartoflu-chorizo-chili", name: "Sætkartöflu chorizo chili", description: "Chili-kássa með sætum kartöflum og baunum"},
      {slug: "sjaksjuka", name: "Sjaksjúka", description: "Grænt sjaksjúka með spínati og kúrbít"},
    ]
  }

  getRecipeBySlug(slug: String): Recipe {
    return this.findEnabledRecipes().filter(recipe => recipe.slug === slug)[0];
  }
}
