import { Component } from '@angular/core';
import { products } from './products';
@Component({
    selector: 'app-customer-component',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.scss']
})

export class CustomerComponent {
    public gridData: any[] = products;
    message: string;

    constructor() {
        this.message = 'Hello from Customer Component constructor';
    }
}
