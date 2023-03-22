import { Component } from "@angular/core";
import { Product } from "./product.model";
import { ProductRepository } from "./repository.model";

@Component({
    selector: "app",
    templateUrl: "product.component.html",
    styleUrls: ["product.component.css"]

})
export class ProductComponent {
   model: ProductRepository = new ProductRepository();

  addProduct() {
    this.model.addProduct(new Product(6, "Samsung S10","good phone","1.jpeg",5000));
  }

  deleteProduct(product: Product) {
    this.model.deleteProduct(product);
  }

  updateProduct(product: Product) {
    product.name = "updated";
  }
    
}