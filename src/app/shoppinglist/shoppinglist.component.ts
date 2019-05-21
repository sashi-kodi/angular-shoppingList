import { Component, OnInit } from '@angular/core';
import {Shoppinglistitem} from '../shoppinglistitem';
import {ShoppinglistService} from '../shoppinglist.service';
    

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {

  items: Shoppinglistitem[];
  constructor(private shoppinglistService: ShoppinglistService) { }

  ngOnInit() {
    this.items= this.shoppinglistService.getItems();
  }
  
  addItem= (newitem: Shoppinglistitem )=>{
    this.shoppinglistService.addItem(newitem);
    this.items= this.shoppinglistService.getItems();
  }
  
  remove= (index)=>{
     this.shoppinglistService.removeItem(index);
     this.items= this.shoppinglistService.getItems();
  }

}
