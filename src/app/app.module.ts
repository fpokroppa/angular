import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './_helpers/in-memory-data.service';
import {SurveyService} from './_services/survey.service';
import {DataService} from './_data/data.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {BankCodeComponent} from './bank-code/bank-code.component';
import {PartnerComponent} from './partner/partner.component';
import {PartnerService} from './_services/partner.service';
import {AlertService} from './_services/alert.service';
import {PartnerDetailComponent} from './partner-detail/partner-detail.component';
import {WriteVdaComponent} from './write-vda/write-vda.component';
import {VdaService} from './_services/vda.service';
import {WriteVdaDirectComponent} from './write-vda-direct/write-vda-direct.component';
import {LoginComponent} from './login/login.component';
import {AlertComponent} from './alert/alert.component';
import {AuthenticationService} from './_services/authentication.service';
import {AuthGuard} from './_guards/auth.guard';
import {JwtInterceptor} from './_helpers/jwt.interceptor';
import {fakeBackendProvider} from './_helpers/fake-backend';
import {RegisterComponent} from './register/register.component';
import {UserService} from './_services/user.service';
import { ExternalUrlDirective } from './_directives/external-url.directive';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BankCodeComponent,
    PartnerComponent,
    PartnerDetailComponent,
    WriteVdaComponent,
    WriteVdaDirectComponent,
    LoginComponent,
    AlertComponent,
    RegisterComponent,
    ExternalUrlDirective,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {
        passThruUnknownUrl: true
      }
    )
  ],
  providers: [
    AuthGuard,
    DataService,
    SurveyService,
    PartnerService,
    AuthenticationService,
    AlertService,
    VdaService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

