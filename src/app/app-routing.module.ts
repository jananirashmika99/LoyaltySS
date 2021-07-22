import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegistrationComponent } from './registration/registration.component';
import { CopmanyProfileComponent } from './copmany-profile/copmany-profile.component';
const routes: Routes = [

  { path: 'loginpage', component: LoginpageComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'company-profile', component:CopmanyProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
