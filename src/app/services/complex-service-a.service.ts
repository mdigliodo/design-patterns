import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComplexServiceAService {

  constructor() { }

  complexOperationA(): void {
    // Complex logic of service A
    console.log('Performing complex operation A');
  }
  
}
