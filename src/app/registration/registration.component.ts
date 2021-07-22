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
onSubmit(){
  console.log(this.userModel);
}

}

