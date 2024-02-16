import { Component } from '@angular/core';
import { ComponentInterface } from '../../interfaces/component.interface';

@Component({
  selector: 'app-leaf',
  standalone: true,
  imports: [],
  templateUrl: './leaf.component.html',
  styleUrl: './leaf.component.scss'
})
export class LeafComponent implements ComponentInterface {

  add(component: ComponentInterface): void {
    console.log('Cannot add to a leaf component.');
  }
  operation(): void {
    console.log('Performing operation on a leaf component.');
  }

}
