import { Controller, Post, Body, Headers, Get, Query } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TransactionDto } from './dto/transactionDto';
import { MakeTransactionDto } from './dto/makeTransactionDto';

@ApiTags('transactions')
@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @ApiOperation({
    summary:
      'Make transaction between two products. To create you need to be client',
  })
  @ApiResponse({
    status: 200,
    description: 'Id of created transaction.',
    type: String,
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
  @Post()
  async create(
    @Body() makeTransactionDto: MakeTransactionDto,
    @Headers('token') token: string,
  ): Promise<string | any> {
    try {
      return this.transactionsService.create(makeTransactionDto);
    } catch (e) {
      return {
        statusCode: 400,
        message: e.message,
      };
    }
  }

  @ApiOperation({
    summary:
      'Get transaction between two products. To get you need to be client',
  })
  @ApiResponse({
    status: 200,
    description: 'Return transaction dto.',
    type: TransactionDto,
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
  @Get()
  async get(
    @Query('id') transactionId: string,
    @Headers('token') token: string,
  ): Promise<TransactionDto> {
    return this.transactionsService.get(transactionId);
  }

  @ApiOperation({
    summary:
      'Get all transactions connected to client. To get you need to be client',
  })
  @ApiResponse({
    status: 200,
    description: 'Return array of transaction dtos.',
    type: TransactionDto,
    isArray: true,
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
  @Get('all-by-client')
  async getAllByClient(
    @Query('client-id') clientId: string,
    @Headers('token') token: string,
  ): Promise<TransactionDto[]> {
    return this.transactionsService.getAllByClient(clientId);
  }
}
