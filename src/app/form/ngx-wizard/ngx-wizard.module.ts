import { NgxMaskModule } from 'ngx-mask';
import { TextMaskModule } from 'angular2-text-mask';
import { NgModule } from '@angular/core';

import { NGXWizardRoutingModule } from "./ngx-wizard-routing.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* App Root */
import { NGXFormWizardComponent } from './ngx-wizard.component';
import { NavbarComponent } from './navbar/navbar.component';

/* Feature Components */
import { PersonalComponent } from './personal/personal.component';
import { WorkComponent } from './work/work.component';
import { AddressComponent } from './address/address.component';
import { ResultComponent } from './result/result.component';

import {ScheduleComponent} from './schedule/schedule.component';
import {DescriptionComponent} from './description/description.component';
import {PhotoComponent} from './photo/photo.component';

import {UnitComponent} from '../units/units.component';
/* Shared Service */
import { FormDataService } from './data/formData.service';
import { WorkflowService } from './workflow/workflow.service';
import { CommonModule } from "@angular/common";
// import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TagsComponent } from './tags/tags.component';
import { CustomMaterialModule } from 'src/app/custom-material/custom-material.module';

@NgModule({
    imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        // TextMaskModule,
        NGXWizardRoutingModule,
        NgxDropzoneModule,
        NgbModule,
        CustomMaterialModule,
        // NgxMaskModule.forRoot()
        // NgxDatatableModule,
    ],
    providers: [{ provide: FormDataService, useClass: FormDataService },
    { provide: WorkflowService, useClass: WorkflowService }],
    declarations: [NGXFormWizardComponent, NavbarComponent, PersonalComponent,PhotoComponent, WorkComponent, AddressComponent, ResultComponent,ScheduleComponent,DescriptionComponent, TagsComponent],
    bootstrap: [NGXFormWizardComponent]

})

export class NGXFormWizardModule { }