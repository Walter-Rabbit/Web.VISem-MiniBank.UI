import { ProductDescriptionDto } from './productDescriptionDto';
import { ApiProperty } from '@nestjs/swagger';

export class CreditDescriptionDto extends ProductDescriptionDto {
  @ApiProperty() percent: number;
}
