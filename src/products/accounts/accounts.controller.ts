import {
  Controller,
  Post,
  Body,
  Headers,
  Get,
  Query,
  Patch,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AccountsService } from './accounts.sercvice';
import { AccountDto } from './dto/accountDto';
import { Session } from '../../auth/session/session.decorator';
import { AuthGuard } from '../../auth/auth/auth.guard';
import { SessionContainer } from 'supertokens-node/recipe/session';

@ApiTags('accounts')
@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @ApiOperation({
    summary: 'Create new account for client. To create you need to be client.',
  })
  @ApiResponse({
    status: 200,
    description: 'Id of created account.',
    type: String,
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
  async create(
    @Body() accountDto: AccountDto,
    @Headers('token') token: string,
  ): Promise<string | any> {
    if (
      accountDto.ownerId == null ||
      accountDto.descriptionId == null ||
      accountDto.serviceEndDate == null
    ) {
      return {
        statusCode: 400,
        description: 'One of fields is null.',
      };
    }

    return this.accountsService.create(accountDto);
  }

  @ApiOperation({
    summary:
      'Get specified account. ' +
      'Client may get only his account, ' +
      'admin may get any account.',
  })
  @ApiResponse({
    status: 200,
    description: 'Return account dto.',
    type: AccountDto,
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
  @Get('get')
  @UseGuards(new AuthGuard())
  async get(
    @Session() session: SessionContainer,
    @Query('id') id: string,
  ): Promise<AccountDto> {
    return this.accountsService.get(id);
  }

  @ApiOperation({
    summary: 'Get all accounts for client',
  })
  @ApiResponse({
    status: 200,
    description: 'Return array of account dtos.',
    type: AccountDto,
    isArray: true,
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
  @Get('get-all-by-client')
  async getAllByClient(
    @Query('client-id') clientId: string,
    @Headers('token') token: string,
  ): Promise<AccountDto[]> {
    return this.accountsService.getAllByClient(clientId);
  }

  @ApiOperation({
    summary: 'Update account for client. To update you need to be admin.',
  })
  @ApiResponse({
    status: 200,
    description: 'Account successfully updated.',
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
  @Patch()
  async update(
    @Body() accountDto: AccountDto,
    @Headers('token') token: string,
  ): Promise<void> {
    return this.accountsService.update(accountDto);
  }

  @ApiOperation({
    summary: 'Get specified account. To delete you need to be admin.',
  })
  @ApiResponse({
    status: 200,
    description: 'Account successfully deleted.',
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
  @Delete()
  async delete(
    @Query('id') id: string,
    @Headers('token') token: string,
  ): Promise<void> {
    return this.accountsService.delete(id);
  }
}
