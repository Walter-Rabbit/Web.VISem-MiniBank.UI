import { Injectable, NotImplementedException } from '@nestjs/common';

@Injectable()
export class ProductsService {
  openNewProduct(): number {
    throw new NotImplementedException();
  }
}
