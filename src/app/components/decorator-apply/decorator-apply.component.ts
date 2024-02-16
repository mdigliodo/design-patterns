import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-decorator-apply',
  standalone: true,
  imports: [BaseComponent],
  template: `
    <div style="background-color: cadetblue; border: 1px solid blueviolet; padding: 10px;">
      <p>This is the decorator component</p>
      <ng-content></ng-content>
    </div>
  `,
})
export class DecoratorApplyComponent implements BaseComponent {

}
