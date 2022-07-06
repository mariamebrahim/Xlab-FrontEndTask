import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Invoice } from './_models/invoice';
import { InvoiceDetails } from './_models/invoice-details';
import { InvoiceTotals } from './_models/invoice-totals';
import { InvoiceItems } from './_models/invoice_items';


@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  baseurl="https://localhost:7251/api/Invoices";
  baseurl1="https://localhost:7251/api/Invoice_Detail";

  getAllInvoices(){
    return this.http.get<Invoice[]>(this.baseurl)
  }
  getInvoiceTotals(id:Number){
    return this.http.get<InvoiceTotals>(this.baseurl1+"/"+id);
  }

  getInvoiceDetailsbyID(id:Number): Observable<InvoiceDetails[]>{
    return this.http.get<InvoiceDetails[]>(this.baseurl+"/"+id);
  }

  insertAnewInvoice(invoice:Invoice){
    return this.http.post(this.baseurl,invoice);
  }

  updateInvoice(invoice:Invoice){
    return this.http.put(this.baseurl+"/"+invoice.invoice_ID,invoice);
  }

  deleteInvoice(id:Number){
    return this.http.delete(this.baseurl+"/"+id);
  }


  ////////////////////////////////////////////////////////////

  insertItemsinInvoice(newItem:InvoiceItems){
    return this.http.post(this.baseurl1,newItem);
  }

  updateItemsinInvoice(newItem:InvoiceItems){
    return this.http.put(this.baseurl1+"/"+newItem.invoice_ID,newItem);
  }

  deleteItemFromInvoice(id:Number){
    return this.http.delete(this.baseurl1);
  }


  constructor(public http:HttpClient) { }
}
