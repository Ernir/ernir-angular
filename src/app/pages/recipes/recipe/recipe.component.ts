import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RecipesService } from "../recipes.service";
import { Recipe } from "../models/recipe";

@Component({
  selector: "app-recipe",
  templateUrl: "./recipe.component.html",
  styleUrls: ["./recipe.component.css"],
  standalone: false
})
export class RecipeComponent implements OnInit {
  recipe: Recipe | undefined;

  @Input() name: string;
  @Input() description: string;
  @Input() slug: string;
  @Input() content: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private recipeService: RecipesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.forEach(route => {
      const slug = route.get("slug");
      if (slug) {
        const recipe = this.recipeService.getRecipeBySlug(slug);
        if (!recipe) {
          this.router.navigate(["/recipes"]);
          return;
        }
        this.name = recipe.name;
        this.description = recipe.description;
        this.slug = recipe.slug;
        this.content = recipe.content;
      }
    });
  }
}
