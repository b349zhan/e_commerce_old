import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent} from './admin/admin-orders/admin-orders.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AuthGuardService as AuthGuard } from './auth-guard.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "products", component: ProductsComponent },
  { path: "shopping-cart", component: ShoppingCartComponent },
  { path: "login", component: LoginComponent },

  { path: "checkout", component: CheckoutComponent, canActivate: [AuthGuard] },
  { path: "my/orders", component: MyOrdersComponent, canActivate: [AuthGuard] },
  { path: "order-success", component: OrderSuccessComponent,canActivate: [AuthGuard] },
  
  { path: "admin/products", component: AdminProductsComponent, canActivate: [AuthGuard, AdminAuthGuardService] },
  { path: "admin/products/new", component: ProductFormComponent, canActivate: [AuthGuard, AdminAuthGuardService] },
  { path: "admin/orders", component: AdminOrdersComponent, canActivate: [AuthGuard, AdminAuthGuardService] }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
