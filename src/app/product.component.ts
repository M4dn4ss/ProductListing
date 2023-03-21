import { Component } from "@angular/core";
import { Product } from "./product.model";
import { ProductRepository } from "./repository.model";

@Component({
    selector: "app",
    template: `
        <input [(ngModel)]="email" (keyup.enter)= "onKeyUp()"/>
        <br>
        <span>{{ email }}</span>
        `,
    styleUrls: ["product.component.css"]

})
export class ProductComponent {
    model: ProductRepository = new ProductRepository();
    disabled = false;
    email = "email@samed.com";

    getClasses(id: number): string {
       let product = this.model.getProductById(id);
       return (product?.price && product.price <= 1000 ? "bg-info":"bg-secondary") + " m-2 p-2 text-white";       
    }

    getClassMap(id: number): Object {
        let product = this.model.getProductById(id);
        return {
            "bg-info": product?.price && product.price <= 1000,
            "bg-secondary": product?.price && product.price > 1000,
            "text-center text-white": product?.name == "Samsung S6"
        }
    }

    getColor(id: number): Object {
        let product = this.model.getProductById(id);
        let color = product?.price && product.price <= 1000 ? "green" : "red";
        return { color: color };
    }

    onSubmit($event: any) {
        $event.stopPropagation();
        console.log("button was clicked");
        console.log($event);
    }

    onDivClicked() {
        console.log('div was clicked');
    }


    onKeyUp() {        
        console.log(this.email);        
    }

    
}