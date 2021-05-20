import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http:HttpClient) { }

register(uid:any,uname:any,pswd:any){
  const data={
    uid,
    uname,
    pswd,
  }
return this.http.post('http://localhost:3000/register',data)
}

login(uid:any,pswd:any){
  const data={
    uid,
    pswd,
  }
  return this.http.post('http://localhost:3000/login',data)
}

buy(uid:any,pswd:any){
  const data={
    uid,
    pswd,
  }
  return this.http.post('http://localhost:3000/buy',data)
}


}
