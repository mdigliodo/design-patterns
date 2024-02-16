import { Component, OnInit } from '@angular/core';
import { ComponentInterface } from '../../interfaces/component.interface';
import { LeafComponent } from '../../components/leaf/leaf.component';

@Component({
  selector: 'app-composite',
  standalone: true,
  imports: [],
  templateUrl: './composite.component.html',
  styleUrl: './composite.component.scss'
})
export class CompositeComponent implements ComponentInterface, OnInit {
  ngOnInit(): void {
    // Create leaf components
    const leaf1: ComponentInterface = new LeafComponent();
    const leaf2: ComponentInterface = new LeafComponent();

    // Create composite component
    const composite: ComponentInterface = new CompositeComponent();
    composite.add(leaf1);
    composite.add(leaf2);

    // Create another composite component
    const composite2: ComponentInterface = new CompositeComponent();
    composite2.add(composite);
    composite2.add(leaf1);

    // Perform operation on the composite structure
    composite2.operation();
  }

  private children: ComponentInterface[] = [];

  add(component: ComponentInterface): void {
    this.children.push(component);
  }

  remove(component: ComponentInterface): void {
    const index = this.children.indexOf(component);
    if (index > -1) {
      this.children.splice(index, 1);
    }
  }

  operation(): void {
    console.log('Performing operation on the composite component.');
    for (const child of this.children) {
      child.operation();
    }
  }

}
