import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { InvoiceService } from 'src/app/invoice.service';
import { InvoiceDetails } from 'src/app/_models/invoice-details';
import { InvoiceTotals } from 'src/app/_models/invoice-totals';
import { InvoiceItems } from 'src/app/_models/invoice_items';

@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.css']
})
export class InvoiceDetailsComponent implements OnInit {

  constructor(public ac:ActivatedRoute,public InvSer:InvoiceService) { }
  Invs:InvoiceDetails[]=[];
  InvTotals=new InvoiceTotals(0,0);
  id:Number=0;

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    this.sub2?.unsubscribe();
    console.log("destroy");
  }

  sub:Subscription|null=null;
  sub1:Subscription|null=null;
  sub2:Subscription|null=null;

  ngOnInit(): void {
    this.sub= this.ac.params.subscribe(a=>{
      this.sub2= this.InvSer.getInvoiceDetailsbyID(a['id']).subscribe(s=>this.Invs=s)
   })
   this.InvSer.getInvoiceTotals(this.id).subscribe(a=>{
    this.InvTotals=a;
  }); 

 
  
  }
  DeleteInvoiceItem(itemID:Number){
    return this.InvSer.deleteItemFromInvoice(itemID);

  }

  }


  
