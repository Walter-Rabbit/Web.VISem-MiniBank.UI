import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { uuid } from 'uuidv4';
import { CreditDescriptionDto } from './dto/creditDescriptionDto';

@Injectable()
export class CreditDescriptionsService {
  constructor(private readonly prismaClient: PrismaClient) {}

  async create(creditDescriptionDto: CreditDescriptionDto): Promise<string> {
    creditDescriptionDto.id = uuid();

    await this.prismaClient.creditDescription.create({
      data: creditDescriptionDto,
    });

    return creditDescriptionDto.id;
  }

  async get(creditDescriptionId): Promise<CreditDescriptionDto> {
    return this.prismaClient.creditDescription.findUnique({
      where: {
        id: creditDescriptionId,
      },
    });
  }

  async update(creditDescriptionDto: CreditDescriptionDto): Promise<void> {
    await this.prismaClient.creditDescription.update({
      where: {
        id: creditDescriptionDto.id,
      },
      data: creditDescriptionDto,
    });
  }

  async delete(creditDescriptionId: string): Promise<void> {
    await this.prismaClient.creditDescription.delete({
      where: {
        id: creditDescriptionId,
      },
    });
  }
}
