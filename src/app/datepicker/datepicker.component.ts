import {Component,OnInit} from '@angular/core';
import { NgbDatepickerConfig, NgbDateParserFormatter,NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
//import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

import { NgbDateFRParserFormatter } from './ngb-date-fr-parser-formatter'

@Component({
  selector: 'ngbd-datepicker-basic',
  templateUrl: './datepicker.component.html',
  //{provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter}
  providers: [{provide: NgbDateParserFormatter, useClass: NgbDateFRParserFormatter}]
})
export class DatepickerComponent implements OnInit  {

  title = 'appBootstrap';
  
  model:NgbDateStruct;
  ngOnInit() {
    
  }
  DoSome()
  {
    console.log( "test"+ this.model.year);
  }
  constructor() { }
}