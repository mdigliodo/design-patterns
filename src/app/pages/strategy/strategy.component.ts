import { Component } from '@angular/core';
import { PaymentContext } from '../../utils/context/payments-method/payment-context';
import { CreditCardStrategy } from '../../utils/context/payments-method/credit-card.strategy';
import { PaypalStrategy } from '../../utils/context/payments-method/paypal.strategy';

@Component({
  selector: 'app-strategy',
  standalone: true,
  imports: [],
  templateUrl: './strategy.component.html',
  styleUrl: './strategy.component.scss'
})
export class StrategyComponent {

  constructor(private paymentContext: PaymentContext) {}

  processCreditCardPayment(amount: number): void {
    this.paymentContext.setStrategy(new CreditCardStrategy());
    this.paymentContext.processPayment(amount);
  }

  processPaypalPayment(amount: number): void {
    this.paymentContext.setStrategy(new PaypalStrategy());
    this.paymentContext.processPayment(amount);
  }

}
