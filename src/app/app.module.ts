import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegistrationComponent } from './registration/registration.component';
import { CopmanyProfileComponent } from './copmany-profile/copmany-profile.component';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';
import { LoyaltyManageComponent } from './loyalty-manage/loyalty-manage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    RegistrationComponent,
    CopmanyProfileComponent,
    CustomerRegisterComponent,
    LoyaltyManageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
