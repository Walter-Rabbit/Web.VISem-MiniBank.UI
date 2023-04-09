import {
  Body,
  Controller,
  Delete,
  NotImplementedException,
  Param,
  Patch,
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

  @Post()
  createProductDescription(
    @Body() productDescriptionDto: ProductDescriptionDto,
  ): number {
    throw new NotImplementedException();
  }

  @Delete()
  deleteProductDescription(@Param() id: number): void {
    throw new NotImplementedException();
  }

  @Patch()
  patchProductDescription(
    @Body() productDescriptionDto: ProductDescriptionDto,
  ): void {
    throw new NotImplementedException();
  }
}
