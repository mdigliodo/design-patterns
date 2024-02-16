import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComplexServiceBService {

  constructor() { }

  complexOperationB(): void {
    // Complex logic of service B
    console.log('Performing complex operation B');
  }
  
}
