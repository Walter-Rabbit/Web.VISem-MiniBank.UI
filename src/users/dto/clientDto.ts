import { UserDto } from './userDto';
import { ProductDto } from '../../products/dto/productDto';
import { ApiProperty } from '@nestjs/swagger';

export class ClientDto extends UserDto {
  @ApiProperty() birthDate: Date;
  @ApiProperty() products: ProductDto[];
}
