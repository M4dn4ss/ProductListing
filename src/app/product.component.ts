import { Component } from "@angular/core";
import { Product } from "./product.model";
import { ProductRepository } from "./repository.model";

@Component({
    selector: "app",
    template: `
        {{ text | summary:5 }}    
        `,
    styleUrls: ["product.component.css"]

})
export class ProductComponent {
   text = "Lorem ipsum dolor sit, amet consectetur adiğisicing elit.";
    
}