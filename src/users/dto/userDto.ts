import { ApiProperty } from '@nestjs/swagger';

export abstract class UserDto {
  @ApiProperty() id: number;
  @ApiProperty() name: string;
  @ApiProperty() email: string;
  @ApiProperty() encodedPassword: string;
}
