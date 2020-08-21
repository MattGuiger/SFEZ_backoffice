import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SamplePagesRoutes } from './sample-pages.routing';
import { HelperclassesComponent } from './helper-classes/hc.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ProfileComponent } from './profile/profile.component';
import { UploadmenuitemsComponent } from './uploadmenuitems/uploadmenuitems.component';

import { PricingComponent } from './pricing/pricing.component';
import { AuthInterceptor } from '../AuthInterceptor';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NotifierModule } from 'angular-notifier';
import { HttpModule } from '@angular/http';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SamplePagesRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NotifierModule,
    HttpClientModule,
    HttpModule,
  ],
  declarations: [
    HelperclassesComponent,
    InvoiceComponent,
    ProfileComponent,
    PricingComponent,
    UploadmenuitemsComponent
  ],
  providers:[ 
    {provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }]
})
export class SamplePagesModule {}
