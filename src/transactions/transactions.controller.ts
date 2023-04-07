import {
  Controller,
  NotImplementedException,
  Post,
  Patch,
} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { makeTransactionDto } from './dto/makeTransactionDto';
import { requestTransactionDto } from './dto/requestTransactionDto';
import { sendMoneyToYourAnotherProductDto } from './dto/sendMoneyToYourAnotherProductDto';

@Controller('transaction')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post('make-transaction')
  makeTransaction(makeTransactionDto: makeTransactionDto) {
    throw new NotImplementedException();
  }

  @Post('request-transaction')
  requestTransaction(requestTransactionDto: requestTransactionDto) {
    throw new NotImplementedException();
  }

  @Patch('send-money-to-your-another-product')
  sendMoneyToYourAnotherProduct(
    sendMoneyToYourAnotherProductDto: sendMoneyToYourAnotherProductDto,
  ) {
    throw new NotImplementedException();
  }
}
