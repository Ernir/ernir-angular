import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { RecipesComponent } from "./pages/recipes/recipes.component";
import { RecipeComponent } from "./pages/recipes/recipe/recipe.component";

const routes: Routes = [
  {
    path: "recipes/:slug",
    component: RecipeComponent
  },
  {
    path: "uppskriftir/:slug",
    component: RecipeComponent
  },
  {
    path: "recipes",
    component: RecipesComponent,
    title: "Ernir.net - Uppskriftir"
  },
  {
    path: "uppskriftir",
    component: RecipesComponent,
    title: "Ernir.net - Uppskriftir"
  },
  {
    path: "**",
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
