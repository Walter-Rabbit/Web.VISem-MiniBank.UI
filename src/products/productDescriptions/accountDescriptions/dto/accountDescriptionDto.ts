import { ProductDescriptionDto } from '../../dto/productDescriptionDto';
import { ApiProperty } from '@nestjs/swagger';

export class AccountDescriptionDto extends ProductDescriptionDto {
  @ApiProperty() limit: number;
  @ApiProperty() monthPercent: number;
  @ApiProperty() price: number;
}
