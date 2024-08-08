import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
 title = "genrating Counter"

  count = 0;

  counter(val:string)
  {
   if(val == 'add')
   this.count++;
  else if(val == 'minus')
    this.count--;
   

  }

}
