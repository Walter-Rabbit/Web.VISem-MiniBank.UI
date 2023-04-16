import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  NotImplementedException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductDescriptionsService } from './productDescriptions.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProductDescriptionDto } from './dto/productDescriptionDto';

@ApiTags('productDescriptions')
@Controller('productDescriptions')
export class ProductDescriptionsController {
  constructor(
    private readonly productDescriptionsService: ProductDescriptionsService,
  ) {}

  @ApiOperation({
    summary: 'Create new product in content. To create you need to be admin.',
  })
  @ApiResponse({
    status: 200,
    description: 'Return id of created product.',
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
  createProductDescription(
    @Body() productDescriptionDto: ProductDescriptionDto,
    @Headers('token') token: string,
  ): number {
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: 'Get product from content.',
  })
  @ApiResponse({
    status: 200,
    description: 'Return product description dto.',
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
  getProductDescription(@Param() id: number): ProductDescriptionDto {
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: 'Delete product from content. To delete you need to be admin.',
  })
  @ApiResponse({
    status: 200,
    description: 'Product successfully deleted.',
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
  deleteProductDescription(
    @Param() id: number,
    @Headers('token') token: string,
  ): void {
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: 'Update product in content. To update you need to be admin.',
  })
  @ApiResponse({
    status: 200,
    description: 'Product successfully updated.',
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
  patchProductDescription(
    @Body() productDescriptionDto: ProductDescriptionDto,
    @Headers('token') token: string,
  ): void {
    throw new NotImplementedException();
  }
}
