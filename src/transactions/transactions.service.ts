import { Injectable, NotImplementedException } from '@nestjs/common';

@Injectable()
export class TransactionsService {
  makeTransaction(yourAccountId, targetAccountId, amount: number): void {
    throw new NotImplementedException();
  }

  requestTransaction(yourAccountId, requestingAccountId, amount: number): void {
    throw new NotImplementedException();
  }

  sendMoneyToYourAnotherProduct(
    productId,
    targetProductId,
    amount: number,
  ): string {
    throw new NotImplementedException();
  }
}
