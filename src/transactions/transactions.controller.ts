import {
  Controller,
  NotImplementedException,
  Post,
  Body,
  Headers,
} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TransactionDto } from './dto/transactionDto';

@ApiTags('transactions')
@Controller('transaction')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @ApiOperation({
    summary:
      'Make transaction between two products. To create you need to be client',
  })
  @ApiResponse({
    status: 200,
    description: 'Id of created transaction.',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal error.',
  })
  @Post('make-transaction')
  makeTransaction(
    @Body() transactionDto: TransactionDto,
    @Headers('token') token: string,
  ) {
    throw new NotImplementedException();
  }
}
