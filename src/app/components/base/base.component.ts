import { Component } from '@angular/core';

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [],
  template: `
  <div style="background-color: bisque; border: 1px solid black; padding: 15px">
    <p>
        I'm the base component!
    </p>
  </div>
  `,
})
export class BaseComponent {

}
