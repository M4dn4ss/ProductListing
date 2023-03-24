import { Component } from '@angular/core';
import { Product } from '../product.model';
import { ProductRepository } from './../repository.model';

@Component({
  selector: 'admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent {
  products: any;
  model: ProductRepository;
  selectedProduct: Product;
  constructor() {
    this.model = new ProductRepository();
    this.products = this.model.getProducts();
  }

  getSelected(product: Product): boolean {
    return product == this.selectedProduct;
  }

  editProduct(product: Product) {
    this.selectedProduct = product;
  }

  SaveChanges(name: any, description: any, price: any, imageUrl: any) {
    const p = this.model.getProductById(this.selectedProduct.id);
    p.name = name;
    p.description = description;
    p.price = price;
    p.imageUrl = imageUrl;
    this.selectedProduct = null;
  }
}
