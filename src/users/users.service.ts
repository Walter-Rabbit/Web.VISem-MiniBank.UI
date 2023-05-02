import { Injectable } from '@nestjs/common';
import { ClientDto } from './dto/clientDto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prismaClient: PrismaClient) {}

  async getClient(clientId: string): Promise<ClientDto> {
    return this.prismaClient.client.findUnique({
      where: {
        id: clientId,
      },
    });
  }

  async createClient(clientDto: ClientDto): Promise<void> {
    await this.prismaClient.client.create({
      data: clientDto,
    });
  }
}
