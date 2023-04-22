import {
  Injectable,
  NotImplementedException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserDto } from './dto/userDto';
import { AdminDto } from './dto/adminDto';
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

  signIn(email: string, password: string): string {
    /*const user = this.get(email);

    // TODO: Encode pass
    if (user?.encodedPassword !== password) {
      throw new UnauthorizedException();
    }

    let role = '';
    if (user instanceof AdminDto) {
      role = 'admin';
    } else if (user instanceof ClientDto) {
      role = 'client';
    }
    const payload = { username: user.email, id: user.id, role: role };
    return this.jwtService.sign(payload);*/

    throw new NotImplementedException();
  }

  get(username: string): UserDto | undefined {
    throw new NotImplementedException();
    //return this.users.find(user => user.username === username);
  }

  async createClient(clientDto: ClientDto): Promise<string> {
    clientDto.id = uuid();

    await this.prismaClient.client.create({
      data: clientDto,
    });

    return clientDto.id;
  }

  createAdmin(adminDto: AdminDto): number {
    throw new NotImplementedException();
  }
}
