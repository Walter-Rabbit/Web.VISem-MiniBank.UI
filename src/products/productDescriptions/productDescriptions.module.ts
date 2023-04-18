import { Module } from '@nestjs/common';
import { AccountDescriptionsModule } from './accountDescriptions/accountDescriptions.module';
import { CreditDescriptionsModule } from './creditDescriptions/creditDescriptions.module';
import { DepositDescriptionsModule } from './depositDescriptions/depositDescriptions.module';

@Module({
  imports: [
    AccountDescriptionsModule,
    CreditDescriptionsModule,
    DepositDescriptionsModule,
  ],
  controllers: [],
  providers: [],
})
export class ProductDescriptionsModule {}
