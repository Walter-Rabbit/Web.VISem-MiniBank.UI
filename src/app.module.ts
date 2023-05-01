import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionsModule } from './transactions/transactions.module';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import * as process from 'process';

@Module({
  imports: [
    TransactionsModule,
    ProductsModule,
    UsersModule,
    AuthModule.forRoot({
      // https://try.supertokens.com is for demo purposes. Replace this with the address of your core instance (sign up on supertokens.com), or self host a core.
      connectionURI: 'https://try.supertokens.com',
      // apiKey: <API_KEY(if configured)>,
      appInfo: {
        // Learn more about this on https://supertokens.com/docs/emailpassword/appinfo
        appName: 'mini-bank-2',
        apiDomain: process.env.DOMAIN,
        websiteDomain: process.env.DOMAIN,
        apiBasePath: '/auth',
        websiteBasePath: '/auth',
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
