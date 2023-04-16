import { Module } from '@nestjs/common';
import { ProductDescriptionsController } from './productDescriptions.conroller';
import { ProductDescriptionsService } from './productDescriptions.service';
import { PrismaClient } from '@prisma/client';

@Module({
  imports: [],
  controllers: [ProductDescriptionsController],
  providers: [ProductDescriptionsService, PrismaClient],
})
export class ProductDescriptionsModule {}
