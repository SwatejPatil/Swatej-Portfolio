import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    // Placeholder routes for now, can be lazy loaded or simple components later
    { path: '**', redirectTo: '' }
];
