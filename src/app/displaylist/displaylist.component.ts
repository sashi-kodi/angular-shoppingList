import { Input, Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Shoppinglistitem} from '../shoppinglistitem';

@Component({
  selector: 'app-displaylist',
  templateUrl: './displaylist.component.html',
  styleUrls: ['./displaylist.component.css']
})
export class DisplaylistComponent implements OnInit {

  @Input() items: Shoppinglistitem[];
  @Output() remove = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit() {
  }
  
  removeItem = (i: number)=>{
    this.remove.emit(i);
  }

}
