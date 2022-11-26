import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InlineImageComponent } from './fragments/inline-image/inline-image.component';
import { HomeComponent } from './pages/home/home.component';
import { MarginNoteComponent } from './fragments/margin-note/margin-note.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { RecipeComponent } from './pages/recipes/recipe/recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    InlineImageComponent,
    HomeComponent,
    MarginNoteComponent,
    RecipesComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
