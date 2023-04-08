import { ProductDescriptionDto } from '../productDescriptions/dto/productDescriptionDto';

export abstract class ProductDto {
  id: number;
  description: ProductDescriptionDto;
  amount: number;
  serviceEndDate: Date;
}
