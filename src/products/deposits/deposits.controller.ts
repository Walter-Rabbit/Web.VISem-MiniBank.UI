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
import { DepositsService } from './deposits.sercvice';
import { DepositDto } from './dto/depositDto';

@ApiTags('deposits')
@Controller('deposits')
export class DepositsController {
  constructor(private readonly depositsService: DepositsService) {}

  @ApiOperation({
    summary: 'Create new deposit for client. To create you need to be client.',
  })
  @ApiResponse({
    status: 200,
    description: 'Id of created deposit.',
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
    @Body() depositDto: DepositDto,
    @Headers('token') token: string,
  ): Promise<string> {
    return this.depositsService.create(depositDto);
  }

  @ApiOperation({
    summary:
      'Get specified deposit. ' +
      'Client may get only his deposit, ' +
      'admin may get any deposit.',
  })
  @ApiResponse({
    status: 200,
    description: 'Return deposit dto.',
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
  ): Promise<DepositDto> {
    return this.depositsService.get(id);
  }

  @ApiOperation({
    summary: 'Update deposit for client. To update you need to be admin.',
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
    @Body() depositDto: DepositDto,
    @Headers('token') token: string,
  ): Promise<void> {
    return this.depositsService.update(depositDto);
  }

  @ApiOperation({
    summary: 'Get specified deposit. To delete you need to be admin.',
  })
  @ApiResponse({
    status: 200,
    description: 'deposit successfully deleted.',
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
    return this.depositsService.delete(id);
  }
}
