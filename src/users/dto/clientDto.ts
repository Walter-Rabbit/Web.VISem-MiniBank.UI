import { ApiProperty } from '@nestjs/swagger';

export class ClientDto {
  @ApiProperty() id: string;
  @ApiProperty() name: string;
  @ApiProperty() email: string;
  @ApiProperty() encodedPassword: string;
  @ApiProperty() birthDate: Date;
}
