import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleButtonComponent),
      multi: true
    }
  ]
})
export class ToggleButtonComponent implements ControlValueAccessor {

  @Input() values!: [string, string];
  @Input() disabled: boolean = false;

  private _value:any;

  public get value(){
    return this._value;
  }
  @Input() set value(val){
    this._value = val;
    this._onChange(this._value);
  }

  constructor() { }

  _onChange(_:any):void {}
  _onTouched(_:any):void {}


  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if(!this.disabled){
      this.disabled = isDisabled;
    }
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  toggleValue(val: string){
    if(this.disabled){
      return
    }
    console.log(this.disabled)
    this.value = val;

  }

}
