import { UserDto } from './userDto';
import { ProductDto } from '../../products/dto/productDto';

export class ClientDto extends UserDto {
  birthDate: Date;
  products: ProductDto[];
}
