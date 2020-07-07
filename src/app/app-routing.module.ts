import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {  ProductListingComponent } from './product-listing/product-listing.component';
import { ProductCreateComponent} from './product-create/product-create.component';




const routes: Routes = [
  {
    path:"",
    component: NavigationComponent,
  },
  {
   path: "register",
   component: RegisterComponent,
  },
  {
    path:"login",
    component: LoginComponent,
  },
  {
    path:"product-listing",
    component:  ProductListingComponent,
  },
  {
    path:"product-create",
    component: ProductCreateComponent,
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
