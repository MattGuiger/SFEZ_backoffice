import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { TablesRoutes } from './tables.routing';
import { DatatableComponent } from './data-table/data-table.component';
import { BasictableComponent } from './basic/basic.component';
import { DarktableComponent } from './dark-basic/dark.component';
import { ColortableComponent } from './color-table/color.component';
import { TablesizeComponent } from './sizing/size.component';

@NgModule({
    imports: [
        RouterModule.forChild(TablesRoutes),
        CommonModule,
        NgxDatatableModule,
    ],
    declarations: [
        DatatableComponent,
        BasictableComponent,
        DarktableComponent,
        ColortableComponent,
        TablesizeComponent,
    ]
})
export class TablesModule { }
