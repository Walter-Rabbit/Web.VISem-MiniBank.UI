import { ProductDto } from './productDto';
import { ApiProperty } from '@nestjs/swagger';

export class DepositDto extends ProductDto {
  @ApiProperty() moneyPaid: number;
}
