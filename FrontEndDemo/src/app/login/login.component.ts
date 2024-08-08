import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
// name="Abhishek"
// username:any=  "harish"
// email:any= "harish@gmail"
// msg ="";
//disable= true
// disable= false

// onButtonClick()
// {
// this.msg = "logged in"

// }

 title = "Two way Binding"
name:any;
 b:number=0;
getDone() : number
{
  console.log("button clicked getdone getdone");
  this.b=10;
 return this.b;
}

}
