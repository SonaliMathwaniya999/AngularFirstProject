import { Component } from '@angular/core';

@Component({
  selector: 'app-loops',
  templateUrl: './loops.component.html',
  styleUrl: './loops.component.css'
})
export class LoopsComponent {
  users = ["ram","abhhi","nita","mansi","harish"]

 personDetails = 
 [
 { name:"abhi" , email:"ram@gma.com", phone: "23445"},
 { name:"mansi" , email:"manis@gma.com", phone: "24545"},
 { name:"sita" , email:"sita@gma.com", phone: "24466"},
 { name:"komal" , email:"komal@gma.com", phone: "23445"},
 { name:"navi" , email:"navi@gma.com", phone: "23445"}

 ]


 userdetailsNested = 
 [
 { name:"abhi" , email:"ram@gma.com", phone: ["23445","23445","23445"]},
 { name:"mansi" , email:"manis@gma.com", phone: ["23445","23445","23445"]},
 { name:"sita" , email:"sita@gma.com", phone: ["23445","23445","23445"]},
 { name:"komal" , email:"komal@gma.com", phone: ["23445","23445","23445"]},
 { name:"navi" , email:"navi@gma.com", phone: ["23445","23445","23445"]}

 ]



}
