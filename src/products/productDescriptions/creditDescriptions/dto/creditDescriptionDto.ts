import { ProductDescriptionDto } from '../../dto/productDescriptionDto';
import { ApiProperty } from '@nestjs/swagger';

export class CreditDescriptionDto extends ProductDescriptionDto {
  @ApiProperty() percent: number;
  @ApiProperty() amount: number;
}
