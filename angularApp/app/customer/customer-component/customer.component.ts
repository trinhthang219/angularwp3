import { Component, OnInit} from "@angular/core";
import { DomSanitizer } from '@angular/platform-browser'
// import { customers } from './customers'
import { Customer } from '../customer-models/customer.model'
import { CustomerServices } from '../customer-services/customer.services'
@Component({
    selector: 'app-customer-component',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.scss'],
    providers: [CustomerServices]
})

export class CustomerComponent implements OnInit {
    public gridData: any[] ; //= customers;
    public message: string;
    arrayConfig: any[];
    public state = {
        skip: 0,
        take: 20,
        sort: this.arrayConfig,
        filter: {
            filters: this.arrayConfig,
            logic: 'and'
        },
        group: this.arrayConfig
    }
    public customer: Customer[];
    public selectedCustomer: Customer;
    constructor(private sanitizer: DomSanitizer, private customerServices: CustomerServices) {
        this.message = 'Hello from Customer Component constructor';
    }
    public getUrl(id: string) {
        return this.sanitizer.bypassSecurityTrustStyle(`url('https://demos.telerik.com/kendo-ui/content/web/Customers/${id}.jpg')`)
    }
    public getAllCustomers(): void {
        this.customerServices.getAllCustomer().then(result => {
             this.customer = result; console.log("abc " + result); 
             this.gridData = this.customer;
            });
    }
    public getCustomerById(): void {
        this.customerServices.getCustomer(1).then(result => { this.selectedCustomer = result; });
    }
    public ngOnInit(): void {
        console.log("customer work");
        this.getAllCustomers();
    }
}
