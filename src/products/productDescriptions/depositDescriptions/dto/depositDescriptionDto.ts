import { ProductDescriptionDto } from '../../dto/productDescriptionDto';
import { ApiProperty } from '@nestjs/swagger';

export class DepositDescriptionDto extends ProductDescriptionDto {
  @ApiProperty() limit: number;
  @ApiProperty() yearPercent: number;
}
