import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/_models/invoice';
import { InvoiceService } from 'src/app/invoice.service';
import { InvoiceTotals } from 'src/app/_models/invoice-totals';

@Component({
  selector: 'app-invoices-home-page',
  templateUrl: './invoices-home-page.component.html',
  styleUrls: ['./invoices-home-page.component.css']
})
export class InvoicesHomePageComponent implements OnInit {

  constructor(public InvSer:InvoiceService) {}
  Invs:Invoice[]=[];

  invoice=new Invoice(0,"",new Date());
  id:Number=0;

  ngOnInit(): void {
   
    this.InvSer.getAllInvoices().subscribe(a=>{
      this.Invs=a;
    }); 
    
  }
  getInvoiceByID(){
      return  this.InvSer.getAllInvoices().subscribe(a=>{
        this.Invs=a.filter(a=>a.invoice_ID==this.id);
      }); 
  }
  getAllInvoices(){
    return this.InvSer.getAllInvoices().subscribe(a=>{
      this.Invs=a;
    }
    );
  }

}
