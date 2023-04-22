import { Module } from '@nestjs/common';
import { ProductDescriptionsModule } from './productDescriptions/productDescriptions.module';
import { AccountsModule } from './accounts/accounts.module';
import { CreditsModule } from './credits/credits.module';
import { DepositsModule } from './deposits/deposits.module';

@Module({
  imports: [
    ProductDescriptionsModule,
    AccountsModule,
    CreditsModule,
    DepositsModule,
  ],
})
export class ProductsModule {}
