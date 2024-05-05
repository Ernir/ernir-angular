import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { RecipesService } from "./recipes.service";
import { Recipe } from "./models/recipe";
import { RecipeTag } from "./models/recipetag";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs/operators";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"]
})
export class RecipesComponent implements OnInit {
  allRecipes: Recipe[];
  recipesToDisplay: Recipe[];
  recipeTags: RecipeTag[];

  constructor(
    private recipeService: RecipesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.recipeTags = this.recipeService.findRecipeTags();
    this.allRecipes = this.recipeService.findRecipes();
    const selectedTag = this.route.queryParams.pipe(map(param => param["tag"]));
    selectedTag
      .pipe(
        map(tag => {
          if (tag) {
            return this.recipeService.findActiveRecipes(tag);
          } else {
            return this.recipeService.findRecipes();
          }
        })
      )
      .subscribe(recipes => {
        this.recipesToDisplay = recipes;
      });
  }

  openRecipe(path: string) {
    this.router.navigate(["recipe", path]);
  }
}
