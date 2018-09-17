import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'about', loadChildren: './about/about.module#AboutModule'},
    { path: 'customer', loadChildren: './customer/customer.module#CustomerModule'}
];

export const AppRoutes = RouterModule.forRoot(routes);
