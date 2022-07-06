import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/invoice.service';
import { InvoiceItems } from 'src/app/_models/invoice_items';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  Item=new InvoiceItems(0,0,0,0);

  constructor(public InvSer:InvoiceService) { }

  ngOnInit(): void {
  }
  insertAnewInvoice(Item:InvoiceItems){
    return this.InvSer.insertItemsinInvoice(Item);
  }


}
