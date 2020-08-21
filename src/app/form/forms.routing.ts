import { Routes } from '@angular/router';

import { FormBasicComponent } from './form-basic/basic.component';
import { FormvalComponent } from './form-validation/form-validation.component';
import { CheckradioComponent } from './checkbox-radio/cr.component';
import { ForminputsComponent } from './form-inputs/inputs.component';
import { GridsComponent } from './input-grids/grids.component';
import { InputgroupsComponent } from './input-groups/input-groups.component';
import { FormhorizontalComponent } from './form-horizontal/horizontal.component';
import { FormactionsComponent } from './form-actions/actions.component';
import { FormrowsepComponent } from './form-row-separator/row-sep.component';
import { FormstripedComponent } from './form-striped-row/striped.component';
import { FormdetailComponent } from './form-detail/detail.component';
import { MultiselectComponent } from './multiselect/multiselect.component';
import { UnitComponent } from './units/units.component';
import {TerritoryComponent} from './territory/territory.component'
import {FoodParkComponent} from './foodparks/foodparks.component';
import {ViewFoodParkComponent} from './viewfoodparks/viewfoodparks.component';
import {HubComponent} from './hubs/hubs.component';
import {HubmemberComponent} from './hubmanager/hubmanager.component';
import {DriverComponent} from './drivers/drivers.component';
import {CompanyComponent} from './company/company.component';
import {CompanyviewComponent} from './companyview/companyview.component'
import {ViewunitComponent} from './viewunits/viewunits.component'
import {UnitorderComponent} from './unitsorder/unitsorder.component'
import {FoodpckmgrorderComponent} from './foodpckmgrorder/foodpckmgrorder.component'

export const FormsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'units',
        component: UnitComponent,
        data: {
          title: 'Units'
        }
      },
      {
        path: 'unit/:id',
       component : ViewunitComponent,
       data : {
         title: "Unit View"
       }
    },
    {
      path: 'units/order',
     component : UnitorderComponent,
     data : {
       title: "Order View"
     }
  },
      {
        path: 'territory',
        component: TerritoryComponent,
        data: {
          title: 'Territory'
        }
      },
      {
        path: 'foodparks',
        component: FoodParkComponent,
        data: {
          title: 'Hub'
        }
      },
      {
        path: 'hubs',
        component: HubComponent,
        data: {
          title: 'Hub'
        }
      },
      {
        path: 'hubmanager',
        component: HubmemberComponent,
        data: {
          title: 'Hub Manager'
        }
      },
      {
        path: 'company',
        component: CompanyComponent,
        data: {
          title: 'Company'
        }
      },
      {
        path: 'company/:id/:type',
        component: CompanyviewComponent,
        data: {
          title: 'Company View'
        }
      },
      {
        path: 'drivers',
        component: DriverComponent,
        data: {
          title: 'Drivers'
        }
      },
      {
        path: 'foodpcgmgrorder',
        component: FoodpckmgrorderComponent,
        data: {
          title: ''
        }
      },
      {
        path: 'foodparks/:id',
        component: ViewFoodParkComponent,
        data: {
          title: 'Hub'
        }
      },
      {
        path: 'formbasic',  
        component: FormBasicComponent,
        data: {
          title: 'Basic Form',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Basic Form' }
          ]
        }
      },
      {
        path: 'formvalidation',
        component: FormvalComponent,
        data: {
          title: 'Form Validation Page',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Form Validation Page' }
          ]
        }
      },
      {
        path: 'forminputs',
        component: ForminputsComponent,
        data: {
          title: 'Form Inputs',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Form Inputs' }
          ]
        }
      },
      {
        path: 'inputgroups',
        component: InputgroupsComponent,
        data: {
          title: 'Input Groups',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Input Groups' }
          ]
        }
      },
      {
        path: 'inputgrid',
        component: GridsComponent,
        data: {
          title: 'Input Grids',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Input Grids' }
          ]
        }
      },
      {
        path: 'checkboxandradio',
        component: CheckradioComponent,
        data: {
          title: 'Checkbox & Radio',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Checkbox & Radio' }
          ]
        }
      },
      {
        path: 'formhorizontal',
        component: FormhorizontalComponent,
        data: {
          title: 'Horizontal Forms',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Horizontal Forms' }
          ]
        }
      },
      {
        path: 'formactions',
        component: FormactionsComponent,
        data: {
          title: 'Form Actions',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Form Actions' }
          ]
        }
      },
      {
        path: 'formrowseparator',
        component: FormrowsepComponent,
        data: {
          title: 'Row Separator Forms',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Row Separator Forms' }
          ]
        }
      },
      {
        path: 'formstripedrows',
        component: FormstripedComponent,
        data: {
          title: 'Striped Rows',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Striped Rows' }
          ]
        }
      },
      {
        path: 'formdetail',
        component: FormdetailComponent,
        data: {
          title: 'Detail Forms',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Detail Forms' }
          ]
        }
      },
	  {
        path: 'multiselect',
        component: MultiselectComponent,
        data: {
          title: 'Multiselect',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Multiselect' }
          ]
        }
      },
	  {
        path: 'ngx',
        loadChildren: () => import('./ngx-wizard/ngx-wizard.module').then(m => m.NGXFormWizardModule)
      }
    ]
  }
];
