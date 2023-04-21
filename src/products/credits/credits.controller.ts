import {
  Controller,
  Post,
  Body,
  Headers,
  Get,
  Query,
  Patch,
  Delete,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreditsService } from './credits.sercvice';
import { CreditDto } from './dto/creditDto';
import { AccountDto } from '../accounts/dto/accountDto';

@ApiTags('credits')
@Controller('credits')
export class CreditsController {
  constructor(private readonly creditsService: CreditsService) {}

  @ApiOperation({
    summary: 'Create new credit for client. To create you need to be client.',
  })
  @ApiResponse({
    status: 200,
    description: 'Id of created credit.',
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
    @Body() creditDto: CreditDto,
    @Headers('token') token: string,
  ): Promise<string | any> {
    if (
      creditDto.ownerId == null ||
      creditDto.descriptionId == null ||
      creditDto.serviceEndDate == null
    ) {
      return {
        statusCode: 400,
        description: 'One of fields is null.',
      };
    }

    return this.creditsService.create(creditDto);
  }

  @ApiOperation({
    summary:
      'Get specified credit. ' +
      'Client may get only his credit, ' +
      'admin may get any credit.',
  })
  @ApiResponse({
    status: 200,
    description: 'Return credit dto.',
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
  async get(
    @Query('id') id: string,
    @Headers('token') token: string,
  ): Promise<CreditDto> {
    return this.creditsService.get(id);
  }

  @ApiOperation({
    summary: 'Get all credits for client',
  })
  @ApiResponse({
    status: 200,
    description: 'Return array of credit dtos.',
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
  ): Promise<CreditDto[]> {
    return this.creditsService.getAllByClient(clientId);
  }

  @ApiOperation({
    summary: 'Update credit for client. To update you need to be admin.',
  })
  @ApiResponse({
    status: 200,
    description: 'credit successfully updated.',
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
    @Body() creditDto: CreditDto,
    @Headers('token') token: string,
  ): Promise<void> {
    return this.creditsService.update(creditDto);
  }

  @ApiOperation({
    summary: 'Get specified credit. To delete you need to be admin.',
  })
  @ApiResponse({
    status: 200,
    description: 'credit successfully deleted.',
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
    return this.creditsService.delete(id);
  }
}
