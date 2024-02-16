import { Component } from '@angular/core';
import { FactoryService } from '../../services/factory.service';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-factory',
  standalone: true,
  imports: [],
  templateUrl: './factory.component.html',
  styleUrl: './factory.component.scss'
})
export class FactoryComponent {

  constructor(private factoryService: FactoryService) { }

  createProduct(type: string): void {
    const product: Product = this.factoryService.createProduct(type);
    product.operation();
  }

}
