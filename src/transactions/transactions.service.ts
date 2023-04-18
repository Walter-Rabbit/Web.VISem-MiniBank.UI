import { Injectable, NotImplementedException } from '@nestjs/common';
import { TransactionDto } from './dto/transactionDto';
import { PrismaClient } from '@prisma/client';
import { uuid } from 'uuidv4';

@Injectable()
export class TransactionsService {
  constructor(private readonly prismaClient: PrismaClient) {}

  async create(transactionDto: TransactionDto): Promise<string> {
    transactionDto.id = uuid();

    await this.prismaClient.transaction.create({
      data: transactionDto,
    });

    return transactionDto.id;
  }

  async get(transactionId: string): Promise<TransactionDto> {
    return this.prismaClient.transaction.findUnique({
      where: {
        id: transactionId,
      },
    });
  }
}
