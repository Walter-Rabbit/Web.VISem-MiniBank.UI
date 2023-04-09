import {
  Injectable,
  NotImplementedException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserDto } from './dto/userDto';
import { AdminDto } from './dto/adminDto';
import { ClientDto } from './dto/clientDto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(private jwtService: JwtService) {}

  signIn(email: string, password: string): string {
    const user = this.get(email);

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
    return this.jwtService.sign(payload);
  }

  get(username: string): UserDto | undefined {
    throw new NotImplementedException();
    //return this.users.find(user => user.username === username);
  }

  createClient(userDto: UserDto): number {
    throw new NotImplementedException();
  }

  createAdmin(adminDto: AdminDto): number {
    throw new NotImplementedException();
  }
}
