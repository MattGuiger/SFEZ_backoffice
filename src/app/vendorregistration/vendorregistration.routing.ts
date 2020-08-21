import { Routes } from '@angular/router';
import {VendorRegistrationComponent} from './vendorregistration.component'
export const EcomRoutes: Routes = [
  {
    path: '',
    children : [
     
      {
        path: '',
        component: VendorRegistrationComponent,
      }
    ]
  }
];
