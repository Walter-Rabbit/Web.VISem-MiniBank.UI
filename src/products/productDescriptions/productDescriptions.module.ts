import { Module } from '@nestjs/common';
import { ProductDescriptionsController } from './productDescriptions.conroller';
import { ProductDescriptionsService } from './productDescriptions.service';

@Module({
  imports: [],
  controllers: [ProductDescriptionsController],
  providers: [ProductDescriptionsService],
})
export class ProductDescriptionsModule {}
