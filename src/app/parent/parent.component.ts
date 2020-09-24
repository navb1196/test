import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
   test:string;
   test1:boolean=true;
  constructor() { }
  getNotification(evt) {
    // <h1>evt</h1>
    //console.log(evt);
    this.test=evt;
}


getdata1():boolean
{
  if(this.test=="Male"){
    console.log(this.test);
     return true;
}
else
{
  return false;
}

}

getdata():boolean
{
  if(this.test=="male"){
    console.log(this.test);
     return true;
}
else
{
  return false;
}

}
tryme()
{
 // this.test1=this.test;
  console.log("test1"+this.test1);

  
}
  ngOnInit(): void {
    
  }

  

}
