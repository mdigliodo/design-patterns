import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingletonService {

  constructor() { }

  public getSingletonServiceMessage(): string {
    return 'This is a message from the SingletonService';
  }
}
