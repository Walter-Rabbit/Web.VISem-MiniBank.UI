import {
  Body,
  Controller,
  NotImplementedException,
  Post,
} from '@nestjs/common';
import { ProductDescriptionsService } from './productDescriptions.service';
import { ApiTags } from '@nestjs/swagger';
import { ProductDescriptionDto } from './dto/productDescriptionDto';

@ApiTags('productDescriptions')
@Controller('productDescriptions')
export class ProductDescriptionsController {
  constructor(
    private readonly productDescriptionsService: ProductDescriptionsService,
  ) {}

  @Post('create-product-description')
  createProductDescription(
    @Body() productDescriptionDto: ProductDescriptionDto,
  ): ProductDescriptionDto {
    return productDescriptionDto;
  }
}
