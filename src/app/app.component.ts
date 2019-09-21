import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myfirstapp';
  no1:number=0;
  no2:number=0;
  ans:number=0;
  name:string="jinal shah";
  str:string="hello";
  fun1()
  {
    alert("hello");
  }
  onAdd(){
   this.ans=this.no1+this.no2;
  }
}
