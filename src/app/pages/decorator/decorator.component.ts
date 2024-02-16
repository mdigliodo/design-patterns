import { Component } from '@angular/core';
import { DecoratorApplyComponent } from '../../components/decorator-apply/decorator-apply.component';
import { BaseComponent } from '../../components/base/base.component';

@Component({
  selector: 'app-decorator',
  standalone: true,
  imports: [DecoratorApplyComponent, BaseComponent],
  templateUrl: './decorator.component.html',
  styleUrl: './decorator.component.scss'
})
export class DecoratorComponent {

}
