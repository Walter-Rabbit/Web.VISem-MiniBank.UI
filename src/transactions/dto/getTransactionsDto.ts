import { ApiProperty } from '@nestjs/swagger';

export class GetTransactionsDto {
  @ApiProperty() clientId: string;
  @ApiProperty() skipTransactions: number;
  @ApiProperty() takeTransactions: number;
}
