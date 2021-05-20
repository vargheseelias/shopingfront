import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from '../services/dataservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router:Router,private frm:FormBuilder,private dataservice:DataserviceService ) {}

  ngOnInit(): void {
  }
  uid=""
  pswd=""

  loginform=this.frm.group({
    uid: ['',[Validators.required,Validators.minLength(4),Validators.maxLength(4),Validators.pattern('[0-9]*')]],
    pswd: ['',[Validators.required,Validators.pattern('[a-zA-Z 0-9]*')]],

  })

  login(){
    if(this.loginform.valid){
      this.dataservice.login(this.loginform.value.uid,this.loginform.value.pswd)
      .subscribe((data:any)=>{
        if(data){
          console.log(data)
          this.router.navigateByUrl('userhome')
        }
      },
      (data)=>{
        alert(data.error.message)
      }
      )
    }
  }

}
