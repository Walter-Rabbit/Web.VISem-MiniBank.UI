import {
  Controller,
  NotImplementedException,
  Post,
  Patch,
} from '@nestjs/common';
import { ProductsService } from './products.sercvice';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
}
