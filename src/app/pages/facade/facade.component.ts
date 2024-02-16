import { Component } from '@angular/core';
import { FacadeService } from '../../services/facade.service';

@Component({
  selector: 'app-facade',
  standalone: true,
  imports: [],
  templateUrl: './facade.component.html',
  styleUrl: './facade.component.scss'
})
export class FacadeComponent {

  constructor(private facadeService: FacadeService) {}

  performFacadeOperation(): void {
    this.facadeService.performOperation();
  }

}
