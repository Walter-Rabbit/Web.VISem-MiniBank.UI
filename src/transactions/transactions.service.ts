import { Injectable } from '@nestjs/common';
import { TransactionDto } from './dto/transactionDto';
import { PrismaClient } from '@prisma/client';
import { uuid } from 'uuidv4';
import { ProductDto } from '../products/dto/productDto';
import { MakeTransactionDto } from './dto/makeTransactionDto';

@Injectable()
export class TransactionsService {
  constructor(private readonly prismaClient: PrismaClient) {}

  async create(makeTransactionDto: MakeTransactionDto): Promise<string> {
    const sender = await this.getProduct(makeTransactionDto.senderProductId);
    const receiver = await this.getProduct(
      makeTransactionDto.receiverProductId,
    );

    if (sender == null || receiver == null) {
      throw new Error('There is no such product.');
    }

    sender.productDto.amount -= makeTransactionDto.amount;
    if (sender.productDto.amount < 0) {
      throw new Error('Negative balance.');
    }
    receiver.productDto.amount += makeTransactionDto.amount;

    await this.updateProduct(sender.productDto, sender.type);
    await this.updateProduct(receiver.productDto, sender.type);

    const transactionDto = new TransactionDto();
    transactionDto.amount = makeTransactionDto.amount;
    transactionDto.senderProductId = makeTransactionDto.senderProductId;
    transactionDto.receiverProductId = makeTransactionDto.receiverProductId;

    transactionDto.date = new Date();
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

  async getAllByClient(clientId: string): Promise<TransactionDto[]> {
    const clientProductIds = await this.getProductsIdsByClient(clientId);

    return this.prismaClient.transaction.findMany({
      where: {
        OR: [
          {
            senderProductId: { in: clientProductIds },
          },
          {
            receiverProductId: { in: clientProductIds },
          },
        ],
      },
      orderBy: [
        {
          date: 'desc',
        },
      ],
    });
  }

  private async getProduct(
    productId: string,
  ): Promise<{ productDto: ProductDto; type: string }> {
    const account = await this.prismaClient.account.findUnique({
      where: {
        id: productId,
      },
    });
    if (account != null) {
      return { productDto: account, type: 'account' };
    }

    const credit = await this.prismaClient.credit.findUnique({
      where: {
        id: productId,
      },
    });
    if (credit != null) {
      return { productDto: credit, type: 'credit' };
    }

    const deposit = await this.prismaClient.deposit.findUnique({
      where: {
        id: productId,
      },
    });
    if (deposit != null) {
      return { productDto: deposit, type: 'deposit' };
    }

    return null;
  }

  private async updateProduct(
    productDto: ProductDto,
    type: string,
  ): Promise<void> {
    if (type === 'account') {
      await this.prismaClient.account.update({
        where: {
          id: productDto.id,
        },
        data: productDto,
      });
    } else if (type === 'credit') {
      await this.prismaClient.credit.update({
        where: {
          id: productDto.id,
        },
        data: productDto,
      });
    } else if (type === 'deposit') {
      await this.prismaClient.deposit.update({
        where: {
          id: productDto.id,
        },
        data: productDto,
      });
    } else {
      throw new Error('Incorrect type');
    }
  }

  private async getProductsIdsByClient(clientId: string): Promise<string[]> {
    const clientProductIds = [];
    const accounts = await this.prismaClient.account.findMany({
      where: { ownerId: clientId },
    });
    for (const i of accounts) {
      clientProductIds.push(i.id);
    }

    const credits = await this.prismaClient.credit.findMany({
      where: { ownerId: clientId },
    });
    for (const i of credits) {
      clientProductIds.push(i.id);
    }

    const deposits = await this.prismaClient.deposit.findMany({
      where: { ownerId: clientId },
    });
    for (const i of deposits) {
      clientProductIds.push(i.id);
    }

    return clientProductIds;
  }
}
