import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryComponent } from './components/inventory/inventory.component';

const routes: Routes = [
  {
    path: 'inventario',
    component: InventoryComponent
  },
  {
    path: '**',
    redirectTo: 'inventario' 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
