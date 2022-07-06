import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './invoice/add-item/add-item.component';
import { InvoiceDetailsComponent } from './invoice/invoice-details/invoice-details.component';
import { InvoicesHomePageComponent } from './invoice/invoices-home-page/invoices-home-page.component';

const routes: Routes = [
  {path:"home",component:InvoicesHomePageComponent},
  {path:"additem",component:AddItemComponent},
  {path:"details/:id", component:InvoiceDetailsComponent},
  {path:"",redirectTo:"/home",pathMatch:"prefix"},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
