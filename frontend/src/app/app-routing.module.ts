import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {TreeComponent} from "./tree/tree.component";
import {SaleComponent} from "./tree/sale/sale.component";
import {PaypalComponent} from "./tree/paypal/paypal.component";

const routes: Routes = [
    { path: 'tree', component: TreeComponent },
    { path: 'sale', component: SaleComponent },
    { path: 'paypal', component: PaypalComponent },
    { path: '**', component: HomeComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
