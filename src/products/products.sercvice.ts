import { Injectable, NotImplementedException } from '@nestjs/common';
import { ProductDescriptionDto } from './productDescriptions/dto/productDescriptionDto';
import { ProductDto } from './dto/productDto';
import { ClientDto } from '../users/dto/clientDto';

@Injectable()
export class ProductsService {
  createProduct(productDto: ProductDto, client: ClientDto): number {
    throw new NotImplementedException();
  }

  deleteProduct(productId, clientId: number): void {
    throw new NotImplementedException();
  }
}
