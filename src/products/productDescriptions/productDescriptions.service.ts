import { Injectable, NotImplementedException } from '@nestjs/common';
import { ProductDescriptionDto } from './dto/productDescriptionDto';
import { PrismaClient, AccountDescription } from '@prisma/client';
import { AccountDescriptionDto } from './dto/accountDescriptionDto';
import { CreditDescriptionDto } from './dto/creditDescriptionDto';
import { DepositDescriptionDto } from './dto/depositDescriptionDto';
import { uuid } from 'uuidv4';

@Injectable()
export class ProductDescriptionsService {
  constructor(private readonly prismaClient: PrismaClient) {}

  async createAccountDescription(
    accountDescriptionDto: AccountDescriptionDto,
  ): Promise<string> {
    /*let accountDescription: AccountDescription;
    accountDescription.id = 0;
    accountDescription.name = accountDescriptionDto.name;
    accountDescription.description = accountDescriptionDto.description;
    accountDescription.duration = accountDescriptionDto.duration;
    accountDescription.limit = accountDescriptionDto.limit;
    accountDescription.monthPercent = accountDescriptionDto.monthPercent;
    accountDescription.price = accountDescriptionDto.price;*/

    accountDescriptionDto.id = uuid();

    await this.prismaClient.accountDescription.create({
      data: accountDescriptionDto,
    });

    return accountDescriptionDto.id;
  }

  async createCreditDescription(
    creditDescriptionDto: CreditDescriptionDto,
  ): Promise<string> {
    throw new NotImplementedException();
  }

  async createDepositDescription(
    depositDescriptionDto: DepositDescriptionDto,
  ): Promise<string> {
    throw new NotImplementedException();
  }

  async getProductDescription(
    productDescriptionId,
  ): Promise<ProductDescriptionDto> {
    throw new NotImplementedException();
  }

  async updateProductDescription(
    productDescriptionDto: ProductDescriptionDto,
  ): Promise<void> {
    throw new NotImplementedException();
  }

  async deleteProductDescription(productDescriptionId: number): Promise<void> {
    throw new NotImplementedException();
  }
}
