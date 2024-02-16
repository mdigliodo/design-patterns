import { Component } from '@angular/core';
import { SingletonService } from '../../services/singleton.service';

@Component({
  selector: 'app-singleton',
  standalone: true,
  imports: [],
  templateUrl: './singleton.component.html',
  styleUrl: './singleton.component.scss'
})
export class SingletonComponent {

  constructor(private singletonService: SingletonService) {
    // Access the shared service instance here
    this.singletonService.getSingletonServiceMessage();
  }

}
