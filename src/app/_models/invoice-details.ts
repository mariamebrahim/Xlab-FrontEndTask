export class InvoiceDetails {
    constructor(
        
    public invoice_ID: Number,
    public product_ID: Number,
    public product_Price: Number,
    public product_Quantity: Number,
    public totalPrice: Number,
    public client_Name: string,
    public invoice_Date: Date
        
    ){}
}
