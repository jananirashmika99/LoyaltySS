import { Component, OnInit } from '@angular/core';
import { User } from '../user';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
 
  userModel = new User('purplesolutions','janani@gmail.com','111111','111111',true);
  constructor() { }
  

  ngOnInit(): void {
  }
  onClickSubmit(result: { companyname: string; email: string; password: string; confirmpassword: string; }) {
    console.log("You have companyname : " + result.companyname); 
    console.log("You have email : " + result.email); 
    console.log("You have password : " + result.password); 
    console.log("You have confirmpassword : " + result.confirmpassword); 
 }

}

