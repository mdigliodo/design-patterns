import { PaymentStrategy } from "../../../interfaces/payment-strategy.interface";

export class CreditCardStrategy implements PaymentStrategy {
    processPayment(amount: number): void {
      console.log(`Processing credit card payment of $${amount}`);
      // Perform credit card payment processing logic here
    }
  }