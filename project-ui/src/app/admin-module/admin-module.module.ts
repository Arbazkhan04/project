import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { AdminModuleComponent } from './admin-module.component';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { DashboardComponent } from './admin-component/dashboard/dashboard.component';
import { ProductComponent } from './admin-component/product/product.component';



@NgModule({
  declarations: [
    AdminModuleComponent,
    AdminComponentComponent,
    DashboardComponent,
    ProductComponent,
   
  ],
  imports: [
    CommonModule,
    AdminModuleRoutingModule
  ]
})
export class AdminModuleModule { }
