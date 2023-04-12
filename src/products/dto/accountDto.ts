import { ProductDto } from './productDto';
import { ApiProperty } from '@nestjs/swagger';

export class AccountDto extends ProductDto {
  @ApiProperty() isActive: boolean;
}
