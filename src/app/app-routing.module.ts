import {InjectionToken, NgModule} from '@angular/core';
import {ActivatedRouteSnapshot, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {BankCodeComponent} from './bank-code/bank-code.component';
import {PartnerComponent} from './partner/partner.component';
import {PartnerDetailComponent} from './partner-detail/partner-detail.component';
import {WriteVdaComponent} from './write-vda/write-vda.component';
import {WriteVdaDirectComponent} from './write-vda-direct/write-vda-direct.component';
import {AuthGuard} from './_guards/auth.guard';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {NotFoundComponent} from './not-found/not-found.component';

const externalUrlProvider = new InjectionToken('externalUrlRedirectResolver');

const routes: Routes = [
  {
    path: '',
    component: HomeComponent, canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'about/:id',
    component: AboutComponent
  },
  {
    path: 'bank-code',
    component: BankCodeComponent
  },
  {
    path: 'partner',
    component: PartnerComponent
  },
  {
    path: 'detail/:id',
    component: PartnerDetailComponent
  },
  {
    path: 'write-vda',
    component: WriteVdaComponent
  },
  {
    path: 'write-vda-direct',
    component: WriteVdaDirectComponent
  },
  {
    path: 'externalRedirect',
    resolve: {
      url: externalUrlProvider,
    },
    //canActivate: [externalUrlProvider],
    // We need a component here because we cannot define the route otherwise
    component: NotFoundComponent,
  },
  // otherwise redirect to home
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  providers: [
    {
      provide: externalUrlProvider,
      useValue: (route: ActivatedRouteSnapshot) => {
        const externalUrl = route.paramMap.get('externalUrl');
        window.open(externalUrl, '_self');
      }
    }
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
