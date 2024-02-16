import { PaymentStrategy } from "../../../interfaces/payment-strategy.interface";

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PaymentContext {
    private strategy!: PaymentStrategy;

    setStrategy(strategy: PaymentStrategy): void {
        this.strategy = strategy;
    }

    processPayment(amount: number): void {
        this.strategy.processPayment(amount);
    }
}