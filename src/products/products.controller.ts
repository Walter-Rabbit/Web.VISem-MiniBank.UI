import {
  Controller,
  NotImplementedException,
  Post,
  Body,
  Param,
  Headers,
  Get,
} from '@nestjs/common';
import { ProductsService } from './products.sercvice';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProductDto } from './dto/productDto';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @ApiOperation({
    summary: 'Create new product for client. To create you need to be client',
  })
  @ApiResponse({
    status: 200,
    description: 'Id of created product.',
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
  createProduct(
    @Body() productDto: ProductDto,
    @Param() clientId: number,
    @Headers('token') token: string,
  ): number {
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary:
      'Get specified product. ' +
      'Client may get only his products, ' +
      'admin may get any product.',
  })
  @ApiResponse({
    status: 200,
    description: 'Return product dto.',
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
  getProduct(@Param() id: number, @Headers('token') token: string): ProductDto {
    throw new NotImplementedException();
  }
}
