import { ApiProperty } from '@nestjs/swagger';

export class TransactionDto {
  @ApiProperty() id: number;
  @ApiProperty() amount: number;
  @ApiProperty() date: Date;
  @ApiProperty() senderProductId: number;
  @ApiProperty() receiverProductId: number;
}
