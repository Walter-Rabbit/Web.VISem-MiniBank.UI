import { ApiProperty } from '@nestjs/swagger';

export class TransactionDto {
  @ApiProperty() id: string;
  @ApiProperty() amount: number;
  @ApiProperty() date: Date;
  @ApiProperty() senderProductId: string;
  @ApiProperty() receiverProductId: string;
}
