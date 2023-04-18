import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { DepositDescriptionsController } from './depositDescriptions.conroller';
import { DepositDescriptionsService } from './depositDescriptions.service';

@Module({
  imports: [],
  controllers: [DepositDescriptionsController],
  providers: [DepositDescriptionsService, PrismaClient],
})
export class DepositDescriptionsModule {}
