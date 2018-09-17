import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CustomerRoutes } from './customer.routes';
import { CustomerComponent } from './customer-component/customer.component';
import { CustomerDetailComponent } from './customer-detail-component/customer-detail.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [
        CommonModule,
        CustomerRoutes,
        HttpModule,
        FormsModule,
        GridModule
    ],

    declarations: [
        CustomerComponent, CustomerDetailComponent
    ],

})

export class CustomerModule { }


