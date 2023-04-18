import { ProductDto } from '../../dto/productDto';
import { ApiProperty } from '@nestjs/swagger';

export class CreditDto extends ProductDto {
  @ApiProperty() moneyLeftToPay: number;
}
