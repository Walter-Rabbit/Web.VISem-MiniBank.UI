import { ApiProperty } from '@nestjs/swagger';

export abstract class ProductDescriptionDto {
  @ApiProperty() id: number;
  @ApiProperty() name: string;
  @ApiProperty() description: string;
  @ApiProperty() duration: Date;
}
