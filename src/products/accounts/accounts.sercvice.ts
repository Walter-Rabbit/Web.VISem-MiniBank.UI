import { Injectable, NotImplementedException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { AccountDto } from './dto/accountDto';
import { uuid } from 'uuidv4';

@Injectable()
export class AccountsService {
  constructor(private readonly prismaClient: PrismaClient) {}

  async create(accountDto: AccountDto): Promise<string> {
    accountDto.id = uuid();

    await this.prismaClient.account.create({
      data: accountDto,
    });

    return accountDto.id;
  }

  async get(accountId: string): Promise<AccountDto> {
    return this.prismaClient.account.findUnique({
      where: {
        id: accountId,
      },
    });
  }

  async update(accountDto: AccountDto): Promise<void> {
    await this.prismaClient.account.update({
      where: {
        id: accountDto.id,
      },
      data: accountDto,
    });
  }

  async delete(accountId: string): Promise<void> {
    await this.prismaClient.account.delete({
      where: {
        id: accountId,
      },
    });
  }
}
