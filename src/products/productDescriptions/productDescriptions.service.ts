import { Injectable, NotImplementedException } from '@nestjs/common';
import { ProductDescriptionDto } from './dto/productDescriptionDto';

@Injectable()
export class ProductDescriptionsService {
  createProductDescription(
    productDescriptionDto: ProductDescriptionDto,
  ): number {
    throw new NotImplementedException();
  }

  updateProductDescription(productDescriptionDto: ProductDescriptionDto): void {
    throw new NotImplementedException();
  }

  deleteProductDescription(productDescriptionId: number): void {
    throw new NotImplementedException();
  }
}
