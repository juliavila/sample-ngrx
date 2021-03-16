import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Add } from '../actions/messages.action';


@Component({
  selector: 'form-component',
  templateUrl: './form.component.html',
})
export class FormComponent {
  title = 'my-pretty-app';
  
  constructor(
    private store: Store<any>,
  ) { }

  add = (text: string) =>{
    console.log('add', text)
    this.store.dispatch(Add(text));}
}
