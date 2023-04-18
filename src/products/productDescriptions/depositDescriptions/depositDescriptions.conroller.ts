import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { DepositDescriptionsService } from './depositDescriptions.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DepositDescriptionDto } from './dto/depositDescriptionDto';

@ApiTags('depositDescriptions')
@Controller('depositDescriptions')
export class DepositDescriptionsController {
  constructor(
    private readonly depositDescriptionsService: DepositDescriptionsService,
  ) {}

  @ApiOperation({
    summary: 'Create new deposit in catalog. To create you need to be admin.',
  })
  @ApiResponse({
    status: 200,
    description: 'Return id of created deposit.',
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
    @Body() depositDescriptionDto: DepositDescriptionDto,
    @Headers('token') token: string,
  ): Promise<string> {
    return this.depositDescriptionsService.create(depositDescriptionDto);
  }

  @ApiOperation({
    summary: 'Get deposit from catalog.',
  })
  @ApiResponse({
    status: 200,
    description: 'Return deposit description dto.',
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
  async get(@Query('id') id: number): Promise<DepositDescriptionDto> {
    return this.depositDescriptionsService.get(id);
  }

  @ApiOperation({
    summary: 'Update deposit in content. To update you need to be admin.',
  })
  @ApiResponse({
    status: 200,
    description: 'deposit successfully updated.',
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
    @Body() depositDescriptionDto: DepositDescriptionDto,
    @Headers('token') token: string,
  ): Promise<void> {
    return this.depositDescriptionsService.update(depositDescriptionDto);
  }

  @ApiOperation({
    summary: 'Delete deposit from catalog. To delete you need to be admin.',
  })
  @ApiResponse({
    status: 200,
    description: 'Deposit successfully deleted.',
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
    return this.depositDescriptionsService.delete(id);
  }
}
