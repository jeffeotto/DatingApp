import { Optional, Self } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { ControlValueAccessor } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.css']
})
export class DateInputComponent implements ControlValueAccessor {
@Input() label:string;
@Input() maxDate: Date;
bsConfig:Partial<BsDatepickerConfig>;



  constructor(@Optional() @Self() public ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
    this.bsConfig = {
    
      dateInputFormat: 'MMMM DD YYYY'
    }
   }
  writeValue(obj: any): void {
   
  }
  registerOnChange(fn: any): void {
   
  }
  registerOnTouched(fn: any): void {
    
  }
 
}
