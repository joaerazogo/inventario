import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  formProduct!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formProduct = this.fb.group({
      product: new FormControl('', [Validators.required])
    })
  }

  getProduct(){
    console.log(this.formProduct.controls['product'].value);
  }

}
