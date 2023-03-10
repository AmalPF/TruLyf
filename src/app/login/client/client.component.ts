import { Component, OnInit ,Inject } from '@angular/core';
import {FormGroup,FormControl ,Validators} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  reactiveForm : FormGroup;
  userName : string;
  password : string;
  /**
   *
   */
  constructor(private router: Router) {
    this.userName = "client";
    this.password = "12345";
  }
  ngOnInit()
  {
    this.reactiveForm=new FormGroup({
      userName : new FormControl(null,Validators.required),
      password : new FormControl(null,Validators.required)
    });
  }
  Signin()
  {
    if(this.reactiveForm.get('userName').value==this.userName && this.reactiveForm.get('password').value==this.password)
    {
      this.router.navigate(['/ClientHome']);
    }
    else
    {
      console.log("Invalid");
    }
  }
}
