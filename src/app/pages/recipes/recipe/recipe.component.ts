import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RecipesService} from "../recipes.service";
import {Recipe} from "../recipe";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipe: Recipe;

  @Input() name: string;
  @Input() description: string;
  @Input() slug: string;

  constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipesService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.forEach(
      route => { const slug = route.get("slug");
      if(slug) {
        const recipe = this.recipeService.getRecipeBySlug(slug);
        this.name = recipe.name;
        this.description = recipe.description;
        this.slug = recipe.slug;
      }
      }
    )
  }

}
