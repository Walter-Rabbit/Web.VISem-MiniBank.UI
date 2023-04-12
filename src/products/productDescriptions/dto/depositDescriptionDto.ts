import { ProductDescriptionDto } from './productDescriptionDto';
import { ApiProperty } from '@nestjs/swagger';

export class DepositDescriptionDto extends ProductDescriptionDto {
  @ApiProperty() yearPercent: number;
}
