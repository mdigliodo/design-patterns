import { Component, EventEmitter, OnInit, Output, signal } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-observer',
  standalone: true,
  imports: [],
  templateUrl: './observer.component.html',
  styleUrl: './observer.component.scss'
})
export class ObserverComponent implements OnInit {

  @Output() productSelected = new EventEmitter();
  private subject: Subject<string> = new Subject<string>();

  ngOnInit() {
    // Subscribe to the subject
    this.subject.subscribe((data: string) => {
      console.log('Received data:', data);
    });
  }

  sendDataToObserver() {
    // Emit data to the subject
    this.subject.next('Hello from ObserverComponent!');
  }

  selectProduct(product: Product) {
    this.productSelected.emit(product);
  }
}
