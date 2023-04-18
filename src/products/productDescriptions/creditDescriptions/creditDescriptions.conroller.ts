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
import { CreditDescriptionsService } from './creditDescriptions.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreditDescriptionDto } from './dto/creditDescriptionDto';

@ApiTags('creditDescriptions')
@Controller('creditDescriptions')
export class CreditDescriptionsController {
  constructor(
    private readonly creditDescriptionsService: CreditDescriptionsService,
  ) {}

  @ApiOperation({
    summary: 'Create new credit in content. To create you need to be admin.',
  })
  @ApiResponse({
    status: 200,
    description: 'Return id of created credit.',
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
  async createCreditDescription(
    @Body() creditDescriptionDto: CreditDescriptionDto,
    @Headers('token') token: string,
  ): Promise<string> {
    return this.creditDescriptionsService.create(creditDescriptionDto);
  }

  @ApiOperation({
    summary: 'Get credit from catalog.',
  })
  @ApiResponse({
    status: 200,
    description: 'Return credit description dto.',
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
  async get(@Query('id') id: number): Promise<CreditDescriptionDto> {
    return this.creditDescriptionsService.get(id);
  }

  @ApiOperation({
    summary: 'Update credit in content. To update you need to be admin.',
  })
  @ApiResponse({
    status: 200,
    description: 'Credit successfully updated.',
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
    @Body() creditDescriptionDto: CreditDescriptionDto,
    @Headers('token') token: string,
  ): Promise<void> {
    return this.creditDescriptionsService.update(creditDescriptionDto);
  }

  @ApiOperation({
    summary: 'Delete credit from catalog. To delete you need to be admin.',
  })
  @ApiResponse({
    status: 200,
    description: 'Credit successfully deleted.',
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
    return this.creditDescriptionsService.delete(id);
  }
}
