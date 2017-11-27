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
import { ProgressBarComponent } from './pages/results-page/item-page/progress-bar/progress-bar.component';
import { ParticlesModule } from 'angular-particle';
import { FeatureSubComponent } from './pages/results-page/item-page/feature-sub/feature-sub.component';
import { FeatureComponent } from './pages/results-page/item-page/feature/feature.component';
import { ActivityMonitorComponent } from './pages/results-page/activity-monitor/activity-monitor.component';
import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ResultsPageComponent,
    ItemPageComponent,
    SuggestionsPageComponent,
    ProgressBarComponent,
    FeatureSubComponent,
    FeatureComponent,
    ActivityMonitorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    ParticlesModule,
    HighlightJsModule
  ],
  providers: [
    ProductService,
    HighlightJsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
