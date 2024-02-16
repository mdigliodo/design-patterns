import { Injectable } from '@angular/core';
import { ComplexServiceAService } from './complex-service-a.service';
import { ComplexServiceBService } from './complex-service-b.service';

@Injectable({
  providedIn: 'root'
})
export class FacadeService {

  constructor(private serviceA: ComplexServiceAService, private serviceB: ComplexServiceBService) {}

  // Provide simplified methods that internally call the appropriate complex subsystem methods
  performOperation(): void {
    this.serviceA.complexOperationA();
    this.serviceB.complexOperationB();
  }
}
