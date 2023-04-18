import { Injectable, NotImplementedException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { uuid } from 'uuidv4';
import { CreditDto } from './dto/creditDto';

@Injectable()
export class CreditsService {
  constructor(private readonly prismaClient: PrismaClient) {}

  async create(creditDto: CreditDto): Promise<string> {
    creditDto.id = uuid();

    await this.prismaClient.credit.create({
      data: creditDto,
    });

    return creditDto.id;
  }

  async get(creditId: string): Promise<CreditDto> {
    return this.prismaClient.credit.findUnique({
      where: {
        id: creditId,
      },
    });
  }

  async update(creditDto: CreditDto): Promise<void> {
    await this.prismaClient.credit.update({
      where: {
        id: creditDto.id,
      },
      data: creditDto,
    });
  }

  async delete(creditId: string): Promise<void> {
    await this.prismaClient.credit.delete({
      where: {
        id: creditId,
      },
    });
  }
}
