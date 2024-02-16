import { Injectable } from "@angular/core";
import { Product } from "../../../interfaces/product.interface";


@Injectable({
    providedIn: 'root'
})
export class ProductB implements Product {
    operation(): void {
        console.log('Product B operation.');
    }
}