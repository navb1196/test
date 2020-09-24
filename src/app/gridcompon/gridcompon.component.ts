import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { Customer } from '../Customer';

@Component({
  selector: 'app-gridcompon',
  templateUrl: './gridcompon.component.html',
  styleUrls: ['./gridcompon.component.css']
})
export class GridcomponComponent implements OnInit {

   
   gridColumns: Array<Object>=new Array<Object>();
   //gridColumns: Array<Object> = new Array<Object>();
   @Output() Selected:EventEmitter<Object>=new EventEmitter<Object>();
   gridData:Array<Customer>= new Array<Customer>();
   @Input()
   EntityName:string;
   @Input()
   set gridDataGet(_gridData:Array<Customer>)
   {
    if (_gridData.length > 0)
    {
     //console.log("123");
    console.log(_gridData);
    var columnNames = Object.keys(_gridData[0]);
    this.gridColumns = new Array<Object>();
      for (var index in columnNames) 
      {
        this.gridColumns.push(columnNames[index]);
      }
      this.gridData=_gridData;

   }
   
   
   }
   Select(_cust:Object)
   {
     this.Selected.emit(_cust);
   }
  ngOnInit(): void {
  }

}
