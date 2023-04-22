import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { AccountDescriptionsService } from './accountDescriptions.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AccountDescriptionDto } from './dto/accountDescriptionDto';

@ApiTags('accountDescriptions')
@Controller('accountDescriptions')
export class AccountDescriptionsController {
  constructor(
    private readonly accountDescriptionsService: AccountDescriptionsService,
  ) {}

  @ApiOperation({
    summary: 'Create new account in catalog. To create you need to be admin.',
  })
  @ApiResponse({
    status: 200,
    description: 'Return id of created account.',
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
    @Body() accountDescriptionDto: AccountDescriptionDto,
    @Headers('token') token: string,
  ): Promise<string> {
    return this.accountDescriptionsService.create(accountDescriptionDto);
  }

  @ApiOperation({
    summary: 'Get account from catalog.',
  })
  @ApiResponse({
    status: 200,
    description: 'Return account description dto.',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal error.',
  })
  @Get()
  async get(@Query('id') id: string): Promise<AccountDescriptionDto> {
    return this.accountDescriptionsService.get(id);
  }

  @ApiOperation({
    summary: 'Get all accounts from catalog.',
  })
  @ApiResponse({
    status: 200,
    description: 'Return array of account description dtos.',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal error.',
  })
  @Get('all')
  async getAll(): Promise<AccountDescriptionDto[]> {
    return this.accountDescriptionsService.getAll();
  }

  @ApiOperation({
    summary: 'Update account in content. To update you need to be admin.',
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
    @Body() accountDescriptionDto: AccountDescriptionDto,
    @Headers('token') token: string,
  ): Promise<void> {
    return this.accountDescriptionsService.update(accountDescriptionDto);
  }

  @ApiOperation({
    summary: 'Delete account from catalog. To delete you need to be admin.',
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
    return this.accountDescriptionsService.delete(id);
  }
}
