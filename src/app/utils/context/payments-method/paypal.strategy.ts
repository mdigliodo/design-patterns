import { PaymentStrategy } from "../../../interfaces/payment-strategy.interface";

export class PaypalStrategy implements PaymentStrategy {
    processPayment(amount: number): void {
      console.log(`Processing PayPal payment of $${amount}`);
      // Perform PayPal payment processing logic here
    }
  }