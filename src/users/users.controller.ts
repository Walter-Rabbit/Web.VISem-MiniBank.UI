import {
  Controller,
  NotImplementedException,
  Post,
  Param,
  Body,
  Headers,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { ClientDto } from './dto/clientDto';
import { AdminDto } from './dto/adminDto';
import { SignInDto } from './dto/signInDto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({
    summary: 'Sign in your account.',
  })
  @ApiResponse({
    status: 200,
    description: 'Your personal token.',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request.',
  })
  @ApiResponse({
    status: 403,
    description: 'Incorrect password.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal error.',
  })
  @Post('sign-in')
  signIn(@Body() signInDto: SignInDto): string {
    return this.usersService.signIn(signInDto.email, signInDto.password);
  }

  @ApiOperation({
    summary: 'Register new client.',
  })
  @ApiResponse({
    status: 200,
    description: 'Your personal token.',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal error.',
  })
  @Post('register')
  register(@Body() clientDto: ClientDto): string {
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: 'Register new admin. To register, you need to be admin',
  })
  @ApiResponse({
    status: 200,
    description: 'New admin personal token.',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal error.',
  })
  @Post('register-admin')
  registerAdmin(
    @Body() adminDto: AdminDto,
    @Headers('token') token: string,
  ): string {
    throw new NotImplementedException();
  }
}
