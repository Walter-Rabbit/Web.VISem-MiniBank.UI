import {
  Controller,
  NotImplementedException,
  Post,
  Param,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('login')
  login(@Param() email, password: string): string {
    throw new NotImplementedException();
  }
}
