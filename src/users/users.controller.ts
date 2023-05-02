import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { ClientDto } from './dto/clientDto';
import { AuthGuard } from '../auth/auth/auth.guard';
import { SessionContainer } from 'supertokens-node/recipe/session';
import { Session } from '../auth/session/session.decorator';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({
    summary: 'Create new client.',
  })
  @ApiResponse({
    status: 200,
    description: 'User successfully created.',
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
  @Post()
  @UseGuards(new AuthGuard())
  async create(
    @Session() session: SessionContainer,
    @Body() clientDto: ClientDto,
  ): Promise<void> {
    clientDto.id = session.getUserId();

    await this.usersService.createClient(clientDto);
  }

  @ApiOperation({
    summary: 'Get specified user. Client may get only his profile,',
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
  @UseGuards(new AuthGuard())
  async getClient(@Session() session: SessionContainer): Promise<ClientDto> {
    return this.usersService.getClient(session.getUserId());
  }
}
