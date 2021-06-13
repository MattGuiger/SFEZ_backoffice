import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';
import {LoginComponent} from '../app/login/login.component'
import { GreenmoneyComponent } from './greenmoney/greenmoney.component';

export const Approutes: Routes = [
  {
    path:'green-money/:id',
    component: GreenmoneyComponent
  },
  {
    path: '',
    component: FullComponent,
    children: [
      // { path: '', redirectTo: '/dashboard/dashboard1', pathMatch: 'full' },
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      {
        path:'green-money',
        component: GreenmoneyComponent
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboards/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'starter',
        loadChildren: () => import('./starter/starter.module').then(m => m.StarterModule)
      },
      { path: 'menuitems', loadChildren: () => import('./menuitems/menuitems.module').then(m => m.MenuitemsModule) },
      { path: 'vendorregistration', loadChildren: () => import('./vendorregistration/vendorregistration.module').then(m => m.VendorRegistrationModule) },
      { path: 'cards', loadChildren: () => import('./cards/cards.module').then(m => m.CardsModule) },
      { path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule) },
      { path: 'forms', loadChildren: () => import('./form/forms.module').then(m => m.FormModule) },
      { path: 'tables', loadChildren: () => import('./table/tables.module').then(m => m.TablesModule) },
      { path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartModule) },
      {
        path: 'widgets',
        loadChildren: () => import('./widgets/widgets.module').then(m => m.WidgetsModule)
      },
      { path: 'ecom', loadChildren: () => import('./ecommerce/ecom.module').then(m => m.EcomModule) },
      {
        path: 'timeline',
        loadChildren: () => import('./timeline/timeline.module').then(m => m.TimelineModule)
      },
      {
        path: 'extra-component',
        loadChildren:
          () => import('./extra-component/extra-component.module').then(m => m.ExtraComponentModule)
      },
      { path: 'apps', loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule) },
      { path: 'maps', loadChildren: () => import('./maps/maps.module').then(m => m.MapsModule) },
      {
        path: 'sample-pages',
        loadChildren: () => import('./sample-pages/sample-pages.module').then(m => m.SamplePagesModule)
      }
    ]
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren:
          () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
      }
    ]
  },
  // {
  //   path: '**',
  //   redirectTo: '/authentication/404'
  // },
  {
    path: '**',
    redirectTo: '/login'
  },
  {
    path: 'login',
    component: LoginComponent,
  }
];
