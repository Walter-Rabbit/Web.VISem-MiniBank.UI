import { Injectable, NotImplementedException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { uuid } from 'uuidv4';
import { DepositDto } from './dto/depositDto';

@Injectable()
export class DepositsService {
  constructor(private readonly prismaClient: PrismaClient) {}

  async create(depositDto: DepositDto): Promise<string> {
    depositDto.id = uuid();

    await this.prismaClient.deposit.create({
      data: depositDto,
    });

    return depositDto.id;
  }

  async get(depositId: string): Promise<DepositDto> {
    return this.prismaClient.deposit.findUnique({
      where: {
        id: depositId,
      },
    });
  }

  async update(depositDto: DepositDto): Promise<void> {
    await this.prismaClient.deposit.update({
      where: {
        id: depositDto.id,
      },
      data: depositDto,
    });
  }

  async delete(depositId: string): Promise<void> {
    await this.prismaClient.deposit.delete({
      where: {
        id: depositId,
      },
    });
  }
}
