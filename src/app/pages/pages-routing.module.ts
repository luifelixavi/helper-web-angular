import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from './api/api.component';

export const PagesRoutingModule: Routes = [
  {                
      path: "api",
      component: ApiComponent,
  }
];
