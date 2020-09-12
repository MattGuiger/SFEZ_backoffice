import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptor } from './AuthInterceptor';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import {
    CommonModule,
    LocationStrategy,
    HashLocationStrategy
} from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ToastrModule } from 'ngx-toastr';
import { CommonFunctionsService } from './services/index';
import { Globals} from './globals'

import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NavigationComponent } from './shared/header-navigation/navigation.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import {LoginComponent} from '../app/login/login.component'
// import {SignupComponent} from '../app/authentication/signup/signup.component'
import { ErrorMessageService } from './services/error-message.service';

import { Approutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { HttpModule } from '@angular/http';
import { GreenmoneyComponent } from './greenmoney/greenmoney.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true,
    wheelSpeed: 1,
    wheelPropagation: true,
    minScrollbarLength: 20
};

@NgModule({
    declarations: [
        AppComponent,
        SpinnerComponent,
        FullComponent,
        BlankComponent,
        NavigationComponent,
        BreadcrumbComponent,
        SidebarComponent,
        LoginComponent,
        GreenmoneyComponent
       
        // SignupComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        HttpModule,
        NgbModule,
        ToastrModule.forRoot(),
        SlimLoadingBarModule.forRoot(),
        RouterModule.forRoot(Approutes, { useHash: false }),
        PerfectScrollbarModule,
        Ng2SearchPipeModule,
        NgMultiSelectDropDownModule.forRoot(),
        AgmCoreModule.forRoot({ apiKey: 'AIzaSyBUb3jDWJQ28vDJhuQZxkC0NXr_zycm8D0' })
    ],
    providers: [
        {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true,
      },
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        },
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        },
        CommonFunctionsService,
        Globals,
        ErrorMessageService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
