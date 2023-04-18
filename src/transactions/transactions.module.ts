import { Module } from '@nestjs/common';
import { TransactionsController } from './transactions.controller';
import { TransactionsService } from './transactions.service';
import { PrismaClient } from '@prisma/client';

@Module({
  imports: [],
  controllers: [TransactionsController],
  providers: [TransactionsService, PrismaClient],
})
export class TransactionsModule {}
