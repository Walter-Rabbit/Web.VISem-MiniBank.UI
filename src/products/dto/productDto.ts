import { ProductDescriptionDto } from '../productDescriptions/dto/productDescriptionDto';
import { ApiProperty } from '@nestjs/swagger';

export abstract class ProductDto {
  @ApiProperty() id: number;
  @ApiProperty() description: ProductDescriptionDto;
  @ApiProperty() amount: number;
  @ApiProperty() serviceEndDate: Date;
}
