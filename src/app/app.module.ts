import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import{FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer.component';
import { GridcomponComponent } from './gridcompon/gridcompon.component';
//import {DpDatePickerModule} from 'ng2-date-picker';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { TabsComponent } from './tabs/tabs.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    GridcomponComponent,
    DatepickerComponent,
    ParentComponent,
    ChildComponent,
    TabsComponent
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    // DpDatePickerModule
  ],
  providers: [
    
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
