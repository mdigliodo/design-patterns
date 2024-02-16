import { Injectable } from "@angular/core";
import { Product } from "../../../interfaces/product.interface";


@Injectable({
    providedIn: 'root'
})
export class ProductA implements Product {
    operation(): void {
        console.log('Product A operation.');
    }
}