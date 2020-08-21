import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DragulaModule } from 'ng2-dragula';
import { QuillModule } from 'ngx-quill';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { AppsRoutes } from './apps.routing';
import { ChatComponent } from './chat/chat.component';
import { TicketlistComponent } from './ticketlist/ticketlist.component';
import { TicketsComponent } from './ticketlist/tickets.component';
import { TicketdetailsComponent } from './ticketdetails/ticketdetails.component';
import { TaskboardComponent } from './taskboard/taskboard.component';
import { FullcalendarComponent } from './fullcalendar/fullcalendar.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NgbModalModule,
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory
        }),
        QuillModule.forRoot(),
        DragulaModule.forRoot(),
        RouterModule.forChild(AppsRoutes),
        PerfectScrollbarModule
    ],
    declarations: [
        ChatComponent,
        TicketlistComponent,
        TicketsComponent,
        TicketdetailsComponent,
        TaskboardComponent,
        FullcalendarComponent
    ]
})
export class AppsModule { }
