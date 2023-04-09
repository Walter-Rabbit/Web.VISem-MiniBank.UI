import {
  Controller,
  NotImplementedException,
  Post,
  Body,
} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { ApiTags } from '@nestjs/swagger';
import { TransactionDto } from './dto/transactionDto';

@ApiTags('transactions')
@Controller('transaction')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post('make-transaction')
  makeTransaction(@Body() transactionDto: TransactionDto) {
    throw new NotImplementedException();
  }

  @Post('make-internal-transaction')
  makeInternalTransaction(@Body() transactionDto: TransactionDto) {
    throw new NotImplementedException();
  }
}
