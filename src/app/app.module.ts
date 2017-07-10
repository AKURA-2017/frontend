import { ProductService } from './shared/services/product.service';
import { Routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ResultsPageComponent } from './pages/results-page/results-page.component';
import { ItemPageComponent } from './pages/results-page/item-page/item-page.component';
import { SuggestionsPageComponent } from './pages/results-page/suggestions-page/suggestions-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ResultsPageComponent,
    ItemPageComponent,
    SuggestionsPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
