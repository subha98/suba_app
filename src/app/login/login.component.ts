import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public name=""; 


  constructor(private router:Router) { }

  

  


  ngOnInit() {
  }
  onClickSubmit(data) {
    alert("Entered Email id : " + data.emailid);  
 }
   
}
