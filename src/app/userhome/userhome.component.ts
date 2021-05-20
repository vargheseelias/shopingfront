import { BuiltinType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import {Router} from '@angular/router' 
import {DataserviceService} from '../services/dataservice.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  products=""
  uid=""
  pswd=""
  test:any;
  constructor(private router:Router,
    private dataservice:DataserviceService,
    private frm:FormBuilder) {}
    buyform=this.frm.group({})
  ngOnInit(): void {
  }
  

  buy(){
    // alert("working")
    console.log("working");
    this.dataservice.buy(this.buyform.value.uid,this.buyform.value.pswd)
    .subscribe((data:any)=>{
      if(data){
        alert("buy buy"+JSON.stringify(data));
        this.router.navigate(['purchase']);
      }
    },
    (data)=>{
      alert(data.error.message)
    }
    )
      
  }

  search(){
    const input = document.getElementById("myInput");
    alert(input)
    const table = document.getElementById("tbl");
    


    
}


  }






