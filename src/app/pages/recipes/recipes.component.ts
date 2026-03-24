import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { RecipesService } from "./recipes.service";
import { Recipe } from "./models/recipe";
import { RecipeTag } from "./models/recipetag";
import { ActivatedRoute } from "@angular/router";
import { map, Observable } from "rxjs";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"],
  standalone: false
})
export class RecipesComponent implements OnInit {
  allRecipes: Recipe[];
  recipesToDisplay$: Observable<Recipe[]>;
  recipeTags: RecipeTag[];

  constructor(
    private recipeService: RecipesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.recipeTags = this.recipeService.findRecipeTags();
    this.allRecipes = this.recipeService.findRecipes();
    this.recipesToDisplay$ = this.route.queryParams.pipe(
      map(params => params["tag"]),
      map(tag =>
        tag ? this.recipeService.findActiveRecipes(tag) : this.recipeService.findRecipes()
      )
    );
  }

  openRecipe(path: string) {
    this.router.navigate(["recipe", path]);
  }
}
