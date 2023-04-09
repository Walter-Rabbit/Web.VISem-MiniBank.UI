import {
  Controller,
  NotImplementedException,
  Post,
  Patch,
  Body,
  Delete,
  Param,
} from '@nestjs/common';
import { ProductsService } from './products.sercvice';
import { ApiTags } from '@nestjs/swagger';
import { ProductDto } from './dto/productDto';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  createProduct(
    @Body() productDto: ProductDto,
    @Param() clientId: number,
  ): number {
    throw new NotImplementedException();
  }

  @Delete()
  deleteProductDescription(
    @Param() productId,
    @Param() clientId: number,
  ): void {
    throw new NotImplementedException();
  }
}
