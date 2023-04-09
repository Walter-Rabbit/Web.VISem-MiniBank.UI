import { Injectable, NotImplementedException } from '@nestjs/common';

@Injectable()
export class UsersService {
  createToken(): string {
    throw new NotImplementedException();
  }
}
