import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NGXFormWizardComponent } from "./ngx-wizard.component";
import { PersonalComponent }  from './personal/personal.component';
import { WorkComponent }      from './work/work.component';
import { AddressComponent }   from './address/address.component';
import { ResultComponent }    from './result/result.component';
import {ScheduleComponent} from './schedule/schedule.component';
import {DescriptionComponent} from './description/description.component';
import {PhotoComponent} from './photo/photo.component';

const routes: Routes = [
  {
    path: '',
     component: NGXFormWizardComponent,
    data: {
      title: 'ngx-wizard'
    },
    children: [
      {
        path: 'schedule/:id',
        component: ScheduleComponent,
        data: {
          title: 'Schedule'
        }
      },
      {
        path: 'description/:id',
        component: DescriptionComponent,
        data: {
          title: 'Description'
        }
      },
      {
        path: 'photo/:id',
        component: PhotoComponent,
        data: {
          title: 'Photo/Featured Dish'
        }
      },

      {
        path: 'wizard',
        component: PersonalComponent,
        data: {
          title: 'Vendor Registration'
        }
      },
      {
        path: 'work/:id',
        component: WorkComponent,        
        data: {
          title: 'Work'
        }
      },  
      {
        path: 'address/:id',
        component: AddressComponent,
        data: {
          title: 'Address'
        }
      },  
      {
        path: 'result/:id',
        component: ResultComponent,
        data: {
          title: 'Result'
        }
      }      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NGXWizardRoutingModule { }

export const routedComponents = [NGXFormWizardComponent];
