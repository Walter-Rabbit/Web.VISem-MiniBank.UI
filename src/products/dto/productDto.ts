import { ApiProperty } from '@nestjs/swagger';

export abstract class ProductDto {
  @ApiProperty() id: string;
  @ApiProperty() descriptionId: string;
  @ApiProperty() ownerId: string;
  @ApiProperty() amount: number;
  @ApiProperty() serviceEndDate: Date;
}
