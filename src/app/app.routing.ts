import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { AppComponent }          from './app.component';
import { DetailComponent }       from './app.detail';
import { HomeComponent }         from './app.home';
import { AboutComponent } from './app.about';

const appRoutes: Routes = [
  { path: 'detail/:symbol/:index', component: DetailComponent },
  { path: 'home',     component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: '**', component: HomeComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
