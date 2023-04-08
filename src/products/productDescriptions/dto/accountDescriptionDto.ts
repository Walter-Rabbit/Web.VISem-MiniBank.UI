import { ProductDescriptionDto } from './productDescriptionDto';

export class AccountDescriptionDto extends ProductDescriptionDto {
  limit: number;
  monthPercent: number;
  price: number;
}
