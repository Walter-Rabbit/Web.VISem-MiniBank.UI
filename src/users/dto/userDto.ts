import { ApiProperty } from '@nestjs/swagger';

export abstract class UserDto {
  @ApiProperty() id: string;
  @ApiProperty() name: string;
  @ApiProperty() email: string;
  @ApiProperty() encodedPassword: string;
}
