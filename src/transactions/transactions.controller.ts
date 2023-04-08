import {
  Controller,
  NotImplementedException,
  Post,
  Patch,
  Param,
} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { makeTransactionDto } from './dto/makeTransactionDto';
import { requestTransactionDto } from './dto/requestTransactionDto';
import { sendMoneyToYourAnotherProductDto } from './dto/sendMoneyToYourAnotherProductDto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('transactions')
@Controller('transaction')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post('make-transaction')
  makeTransaction(@Param('someString') someString: string) {
    throw new NotImplementedException();
  }

  @Post('request-transaction')
  requestTransaction() {
    throw new NotImplementedException();
  }

  @Patch('send-money-to-your-another-product')
  sendMoneyToYourAnotherProduct() {
    throw new NotImplementedException();
  }
}
