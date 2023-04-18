import { ProductDto } from '../../dto/productDto';
import { ApiProperty } from '@nestjs/swagger';

export class DepositDto extends ProductDto {
  @ApiProperty() moneyPaid: number;
}
