import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  @Input() tab1:string;
  @Input() tab2:string;
  constructor() { }
  

  ngOnInit(): void {
  }

}
