import { Routes } from '@angular/router';
import {MenuitemsComponent} from './menuitems.component'
import {EditComponent}  from './edit/edit.component'
export const EcomRoutes: Routes = [
  {
    path: '',
    children : [
      {
        path: 'view/:categoryId/:id',
        component: EditComponent,
        data: {
          title: 'Edit Product',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'View Product' }
          ]
        }
      },
      {
        path: '',
        component: MenuitemsComponent,
      },
      {
        path: 'auth/:email',
        component: MenuitemsComponent,
        // data: {
        //   title: 'Auth',
        //   urls: [
        //     { title: 'Dashboard', url: '/dashboard' },
        //     { title: 'View Product' }
        //   ]
        // }
      },
    ]
  }
];
