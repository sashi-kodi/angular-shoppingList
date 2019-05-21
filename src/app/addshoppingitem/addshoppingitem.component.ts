import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import {Shoppinglistitem} from '../shoppinglistitem';


@Component({
  selector: 'app-addshoppingitem',
  templateUrl: './addshoppingitem.component.html',
  styleUrls: ['./addshoppingitem.component.css']
})
export class AddshoppingitemComponent implements OnInit {

   @Output() addItem = new EventEmitter<Shoppinglistitem>();
    @ViewChild('newitem') elRef: ElementRef;
   
  constructor() { }

  ngOnInit() {
  }
  addNewItem = ()=>{
    let value = this.elRef.nativeElement.value;
    let newitem = {name: value};
    this.addItem.emit(newitem);
    this.elRef.nativeElement.value = '';
  }
  
}
