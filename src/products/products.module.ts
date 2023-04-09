import { Module } from '@nestjs/common';
import { ProductsService } from './products.sercvice';
import { ProductsController } from './products.controller';
import { ProductDescriptionsModule } from './productDescriptions/productDescriptions.module';

@Module({
  imports: [ProductDescriptionsModule],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
