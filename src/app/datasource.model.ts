import { Product } from "./product.model";

export class SimpleDataSource {
    private products: Product[];
    
    constructor() {
        this.products = new Array<Product>(
            new Product(1, "Samsung S5","good phone","1.jpeg",1000),
            new Product(2, "Samsung S6","good phone","2.jpeg",2000),
            new Product(3, "Samsung S7","good phone","3.jpeg",3000),
            new Product(4, "Samsung S8","good phone","4.jpeg",4000),
            new Product(5, "Samsung S9","good phone","5.jpeg",5000)
        );
    }

    getProducts(): Product[] {
        return this.products;
    }
}