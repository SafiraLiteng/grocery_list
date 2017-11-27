import { ModuleWithProviders }from '@angular/core';
import { Routes, RouterModule }from '@angular/router';
import { AppComponent }from './app.component';
import { PageAbout } from './app.about';
import { PageHome } from './app.home';
import { PageDetails }from './app.details';
import { PageDefault }from './app.pagedefault';

const appRoutes: Routes = [
  { path: 'about', component: PageAbout },
  { path: 'home', component: PageHome },
  { path: 'detail/:id', component: PageDetails },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageDefault }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
