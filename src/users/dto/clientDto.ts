import { UserDto } from './userDto';
import { ApiProperty } from '@nestjs/swagger';

export class ClientDto extends UserDto {
  @ApiProperty() birthDate: Date;
}
