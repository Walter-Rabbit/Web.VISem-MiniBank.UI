import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  //TODO: Добавить модуль для пользователя (авторизация и прочее)
  imports: [TransactionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
