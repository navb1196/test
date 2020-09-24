import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  // @Output() selectStory = new EventEmitter<string>();
  @Output() notifyParent: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }
  private selectedLink: string = "Male";

  setradio(e: string): void {

    //this.notifyParent.emit(e);
    //this.selectedLink = e;


  }
  onItemChange(value){
    console.log(" Value is : ", value );
    this.notifyParent.emit(value);
 }


  isSelected(name: string): boolean 
  {

    if (!this.selectedLink) 
    { // if no radio button is selected, always return false so every nothing is shown  
      return false;
    }

    return (this.selectedLink === name); // if current radio button is selected, return true, else return false  
  }

}
