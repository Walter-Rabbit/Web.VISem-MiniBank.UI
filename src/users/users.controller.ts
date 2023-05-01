import { Controller, Post, Param, Body, Headers, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { ClientDto } from './dto/clientDto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({
    summary: 'Create new client.',
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
  @Post('create')
  async create(@Body() clientDto: ClientDto): Promise<string> {
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
