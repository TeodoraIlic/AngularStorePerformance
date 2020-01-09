import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from "./components/product/product.component";
import { ProductDetailComponent } from './components/product-detail/product-detail.component';


const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'product/:id', component: ProductDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
