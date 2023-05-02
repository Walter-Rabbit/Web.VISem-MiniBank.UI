import { ApiProperty } from '@nestjs/swagger';

export class ClientDto {
  @ApiProperty() id: string;
  @ApiProperty() name: string;
  @ApiProperty() email: string;
  @ApiProperty() password: string;
  @ApiProperty() birthDate: Date;
}
