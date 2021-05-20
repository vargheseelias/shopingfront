import { Component, OnInit } from '@angular/core';
import { FormBuilder , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private router:Router,private frm:FormBuilder,private dataservice:DataserviceService) { }
  uid=""
  uname="" 
  pswd=""
  registerform=this.frm.group({
    uid: ['',[Validators.required,Validators.minLength(4),Validators.maxLength(4),Validators.pattern('[0-9]*')]],
    uname: ['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    pswd: ['',[Validators.required,Validators.pattern('[a-zA-Z 0-9]*')]],
  })

  ngOnInit(): void {
  }

  register(){
    if(this.registerform.valid){
    this.dataservice.register(this.registerform.value.uid,this.registerform.value.uname,this.registerform.value.pswd)
    .subscribe((data:any)=>{
      if(data){
        alert("sucess")
        this.router.navigateByUrl('')
      }
      
    },
    (data)=>{
      alert(data.error.message)
    }
    )
  }
  else{
    alert("invalid form")
  }
  }
}
