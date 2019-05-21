import { Injectable } from '@angular/core';
import {Shoppinglistitem} from './shoppinglistitem';

@Injectable({
  providedIn: 'root'
})
export class ShoppinglistService {

   items: Shoppinglistitem[];
  constructor() { 
   this.items=[{name: 'milk'}, {name: 'honey'}];
  }
  
  getItems = ():Shoppinglistitem[]=>{
  
    return this.items;
  
  }
  removeItem=(index: number)=>{
    this.items.splice(index,1);
  }
  addItem = (item: Shoppinglistitem)=>{
    let found= this.items.find(el => el.name === item.name);
    if (!found)
     this.items.push(item);
  }
}
