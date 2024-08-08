import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 title:string ='Get INput box';
 displayVal = '';
 getValue(val:string)
 {
  console.log("get value");
  this.displayVal = val; 
}
}
