import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegistrationComponent } from './registration/registration.component';
import { CopmanyProfileComponent } from './copmany-profile/copmany-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    RegistrationComponent,
    CopmanyProfileComponent
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
