import { ResultsPageComponent } from './pages/results-page/results-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

import { Routes, RouterModule } from '@angular/router';
import { ActivityMonitorComponent } from './pages/results-page/activity-monitor/activity-monitor.component';
const APP_ROUTES: Routes = [
    {
        path: '',
        component: LandingPageComponent,
    },
      {
        path: 'results',
        component: ResultsPageComponent,
    },
    {
        path: 'activity',
        component: ActivityMonitorComponent,
    }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
