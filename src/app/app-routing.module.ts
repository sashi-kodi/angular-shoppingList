import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShoppinglistComponent} from './shoppinglist/shoppinglist.component';

const routes: Routes = [{path:'shoppinglist', component:ShoppinglistComponent},
{path:'', redirectTo: '/shoppinglist', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
