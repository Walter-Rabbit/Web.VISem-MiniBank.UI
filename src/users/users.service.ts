import { Injectable } from '@nestjs/common';
import { ClientDto } from './dto/clientDto';
import { JwtService } from '@nestjs/jwt';
import { PrismaClient } from '@prisma/client';
import { uuid } from 'uuidv4';

@Injectable()
export class UsersService {
  constructor(
    //private jwtService: JwtService,
    private prismaClient: PrismaClient,
  ) {}

  async getClient(clientId: string): Promise<ClientDto> {
    return this.prismaClient.client.findUnique({
      where: {
        id: clientId,
      },
    });
  }

  async createClient(clientDto: ClientDto): Promise<string> {
    clientDto.id = uuid();

    await this.prismaClient.client.create({
      data: clientDto,
    });

    return clientDto.id;
  }
}
