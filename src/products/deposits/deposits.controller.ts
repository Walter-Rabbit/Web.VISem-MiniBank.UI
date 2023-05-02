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
import { DepositsService } from './deposits.sercvice';
import { DepositDto } from './dto/depositDto';
import { AuthGuard } from '../../auth/auth/auth.guard';
import { Session } from '../../auth/session/session.decorator';
import { SessionContainer } from 'supertokens-node/recipe/session';

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
  @UseGuards(new AuthGuard())
  async create(
    @Body() depositDto: DepositDto,
    @Session() session: SessionContainer,
  ): Promise<string | any> {
    if (depositDto.descriptionId == null || depositDto.serviceEndDate == null) {
      return {
        statusCode: 400,
        description: 'One of fields is null.',
      };
    }
    depositDto.ownerId = session.getUserId();

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
    type: DepositDto,
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
    @Query('id') id: string,
    @Session() session: SessionContainer,
  ): Promise<DepositDto> {
    return this.depositsService.get(id);
  }

  @ApiOperation({
    summary: 'Get all deposits for client',
  })
  @ApiResponse({
    status: 200,
    description: 'Return array of deposit dtos.',
    type: DepositDto,
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
  @UseGuards(new AuthGuard())
  async getAllByClient(
    @Session() session: SessionContainer,
  ): Promise<DepositDto[]> {
    return this.depositsService.getAllByClient(session.getUserId());
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
