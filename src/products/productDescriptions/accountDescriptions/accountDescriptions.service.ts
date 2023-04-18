import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { AccountDescriptionDto } from './dto/accountDescriptionDto';
import { uuid } from 'uuidv4';

@Injectable()
export class AccountDescriptionsService {
  constructor(private readonly prismaClient: PrismaClient) {}

  async create(accountDescriptionDto: AccountDescriptionDto): Promise<string> {
    accountDescriptionDto.id = uuid();

    await this.prismaClient.accountDescription.create({
      data: accountDescriptionDto,
    });

    return accountDescriptionDto.id;
  }

  async get(accountDescriptionId): Promise<AccountDescriptionDto> {
    return this.prismaClient.accountDescription.findUnique({
      where: {
        id: accountDescriptionId,
      },
    });
  }

  async update(accountDescriptionDto: AccountDescriptionDto): Promise<void> {
    await this.prismaClient.accountDescription.update({
      where: {
        id: accountDescriptionDto.id,
      },
      data: accountDescriptionDto,
    });
  }

  async delete(accountDescriptionId: string): Promise<void> {
    await this.prismaClient.accountDescription.delete({
      where: {
        id: accountDescriptionId,
      },
    });
  }
}
