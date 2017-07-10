import { ResultsPageComponent } from './pages/results-page/results-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

import { Routes, RouterModule } from '@angular/router';
const APP_ROUTES: Routes = [
    {
        path: '',
        component: LandingPageComponent,
    },
      {
        path: 'results',
        component: ResultsPageComponent,
    }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
