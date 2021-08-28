import { MenuitemsComponent} from './menuitems.component'
import { EditComponent} from './edit/edit.component'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
// import { SpinnerComponent } from '../shared/spinner.component';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EcomRoutes } from './menuitems.routing';
import { TruncateStringPipe } from './truncate-string.pipe';
import { MaterialModule } from './material/material.module';

import { UiSwitchModule } from 'ngx-ui-switch';

@NgModule({
  declarations: [
    MenuitemsComponent,
    EditComponent,
    TruncateStringPipe,
    // SpinnerComponent
  ],
  imports: [CommonModule,
    ToastrModule.forRoot(),
    SlimLoadingBarModule.forRoot(),
    MaterialModule,
    UiSwitchModule.forRoot({
      size: 'small',
      color: '#64bd63',
      switchColor: '#e0dbd4',
      defaultBgColor: '#e0dbd4',
      defaultBoColor : '#e0dbd4',
      checkedLabel: 'on',
      uncheckedLabel: 'off'
    }),
     RouterModule.forChild(EcomRoutes), FormsModule, NgbModule],

})
export class MenuitemsModule { }
