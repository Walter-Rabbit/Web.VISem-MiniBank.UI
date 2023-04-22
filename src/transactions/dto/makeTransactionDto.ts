import { ApiProperty } from '@nestjs/swagger';

export class MakeTransactionDto {
  @ApiProperty() amount: number;
  @ApiProperty() senderProductId: string;
  @ApiProperty() receiverProductId: string;
}
