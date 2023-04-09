import {
  Controller,
  NotImplementedException,
  Post,
  Patch,
  Body,
  Delete,
  Param,
  Headers,
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
}
