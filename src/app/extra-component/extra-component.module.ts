import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { QuillModule } from 'ngx-quill';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DragulaModule } from 'ng2-dragula';

import { ExtraComponentsRoutes } from './extra-component.routing';
import { ToastrComponent } from './toastr/toastr.component';
import { EditorComponent } from './editor/editor.component';
import { DragComponent } from './drag-n-drop/drag.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ExtraComponentsRoutes),
        FormsModule,
        ReactiveFormsModule,
        QuillModule.forRoot(),
        NgbModule,
        DragulaModule.forRoot(),
    ],

    declarations: [
        ToastrComponent,
        EditorComponent,
        DragComponent
    ]
})
export class ExtraComponentModule { }
