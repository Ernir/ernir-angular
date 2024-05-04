import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { RecipesService } from "./recipes.service";
import { Recipe } from "./models/recipe";
import { RecipeTag } from "./models/recipetag";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"]
})
export class RecipesComponent implements OnInit {
  recipesList: Recipe[];
  recipeTags: RecipeTag[];

  constructor(private recipeService: RecipesService, private router: Router) {
  }

  ngOnInit(): void {
    this.recipesList = this.recipeService.findEnabledRecipes();
    this.recipeTags = this.recipeService.findRecipeTags();
  }

  openRecipe(path: string) {
    this.router.navigate(["recipe", path]);
  }
}
