import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { uuid } from 'uuidv4';
import { DepositDescriptionDto } from './dto/depositDescriptionDto';

@Injectable()
export class DepositDescriptionsService {
  constructor(private readonly prismaClient: PrismaClient) {}

  async create(depositDescriptionDto: DepositDescriptionDto): Promise<string> {
    depositDescriptionDto.id = uuid();

    await this.prismaClient.depositDescription.create({
      data: depositDescriptionDto,
    });

    return depositDescriptionDto.id;
  }

  async get(depositDescriptionId: string): Promise<DepositDescriptionDto> {
    return this.prismaClient.depositDescription.findUnique({
      where: {
        id: depositDescriptionId,
      },
    });
  }

  async getAll(): Promise<DepositDescriptionDto[]> {
    return this.prismaClient.depositDescription.findMany();
  }

  async update(depositDescriptionDto: DepositDescriptionDto): Promise<void> {
    await this.prismaClient.depositDescription.update({
      where: {
        id: depositDescriptionDto.id,
      },
      data: depositDescriptionDto,
    });
  }

  async delete(depositDescriptionId: string): Promise<void> {
    await this.prismaClient.depositDescription.delete({
      where: {
        id: depositDescriptionId,
      },
    });
  }
}
