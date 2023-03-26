import { Component } from "@angular/core";
import { FormControl, FormGroup, NgForm } from "@angular/forms";
import { Product } from "./product.model";
import { ProductRepository } from "./repository.model";

@Component({
    selector: "app",
    templateUrl: "product.component.html",
    styleUrls: ["product.component.css"]

})
export class ProductComponent {
  productForm = new FormGroup({
    name : new FormControl('Samsung S5'),  
    description : new FormControl('iyi telefon'),
    price : new FormControl('1000'),
    imageUrl : new FormControl('1.jpeg')
  })  

  onSubmit() {
    console.log(this.productForm.value);
  }

  updateProduct() {
    this.productForm.patchValue({
      name: 'IPhone X',
      price: "5000"
    });
  }
  
    
}