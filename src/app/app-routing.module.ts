import { newTransferComponent } from './new-transfer-component/new-transfer.component';
import { ExtractComponent } from './extract/extract.component';
import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';

import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'extract', pathMatch: 'full'},
  {path: 'extract', component: ExtractComponent},
  {path: 'new-transfer', component: newTransferComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
