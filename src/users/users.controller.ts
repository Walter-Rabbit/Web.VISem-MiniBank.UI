import { Controller, Post, Param, Body, Headers, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { ClientDto } from './dto/clientDto';
import { SignInDto } from './dto/signInDto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /*@ApiOperation({
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
    */
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
  async register(@Body() clientDto: ClientDto): Promise<string> {
    return this.usersService.createClient(clientDto);
  }

  @ApiOperation({
    summary:
      'Get specified user. ' +
      'Client may get only his profile,' +
      'admin may get any profiles.',
  })
  @ApiResponse({
    status: 200,
    description: 'Return user dto.',
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
  @Get()
  async getClient(
    @Param() id: string,
    @Headers('token') token: string,
  ): Promise<ClientDto> {
    return this.usersService.getClient(id);
  }
}
