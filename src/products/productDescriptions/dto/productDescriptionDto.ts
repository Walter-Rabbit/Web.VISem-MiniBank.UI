import { ApiProperty } from '@nestjs/swagger';

export abstract class ProductDescriptionDto {
  @ApiProperty() id: string;
  @ApiProperty() name: string;
  @ApiProperty() description: string;
  @ApiProperty() duration: Date;
}
