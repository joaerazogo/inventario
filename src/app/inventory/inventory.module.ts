import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './components/inventory/inventory.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    InventoryComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ]
})
export class InventoryModule { }
