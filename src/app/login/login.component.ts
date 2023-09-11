import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // property

  email:string=""
  password:string=""

  // constructor

  constructor(private api:ApiService,private loginRouter:Router){}

  login(){
    if(this.email&&this.password){
      // alert(`username: ${this.username} password:${this.password}`)
      // compare username & password with admin details
      // for that we should get admin details
      this.api.adminDetails().subscribe({
        next:(result:any)=>{
          console.log(result);
          // compare username and passsword with admin details
          if(this.email==result.email && this.password==result.password){
            // save details in localstorage
            localStorage.setItem("admin_name",result.name)
            localStorage.setItem("admin_pswd",result.password)
            alert(`authentication successful`)
            // navigate to home page - navigateByUrl()- router class
            this.loginRouter.navigateByUrl(`home`)
          }
          else{
            alert(`Invalid admin credentials`)
          }

          
        },
        error:(result:any)=>{
          console.log(result);
          alert('cannot fetch data ..please try again later')
          
        }
      })
    }
    else{
      alert(`please fill the form completely`)
    }
  }

}
