import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoicesHomePageComponent } from './invoices-home-page/invoices-home-page.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InvoiceDetailsComponent } from './invoice-details/invoice-details.component';
import { AddItemComponent } from './add-item/add-item.component';



@NgModule({
  declarations: [
    InvoicesHomePageComponent,
    InvoiceDetailsComponent,
    AddItemComponent
  ],
  imports: [
    CommonModule,RouterModule,FormsModule
    
  ],exports: [InvoicesHomePageComponent,InvoiceDetailsComponent]
})
export class InvoiceModule { }
