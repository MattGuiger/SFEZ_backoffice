import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NotfoundComponent } from './404/not-found.component';
import { LockComponent } from './lock/lock.component';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';
import { SignupComponent } from './signup/signup.component';
import { Signup2Component } from './signup2/signup2.component';
import { AgmCoreModule } from '@agm/core';
import { AuthenticationRoutes } from './authentication.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthenticationRoutes),
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBLXlb_YUHwakS59P-aI5_xJHRwXBtA_hE',//'AIzaSyBl-UKKzfU6aOgD-aixzgRy_yJ7_BIvbms',
      libraries: ['places','visualization','drawing', 'geometry']
    }),
  ],
  declarations: [
    NotfoundComponent,
    LoginComponent,
    SignupComponent,
    LockComponent,
    Login2Component,
    Signup2Component
  ]
})
export class AuthenticationModule {}
