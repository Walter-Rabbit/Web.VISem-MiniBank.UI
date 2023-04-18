import { ProductDto } from '../../dto/productDto';
import { ApiProperty } from '@nestjs/swagger';

export class AccountDto extends ProductDto {
  @ApiProperty() isActive: boolean;
}
