import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreditDescriptionsService } from './creditDescriptions.service';
import { CreditDescriptionsController } from './creditDescriptions.conroller';

@Module({
  imports: [],
  controllers: [CreditDescriptionsController],
  providers: [CreditDescriptionsService, PrismaClient],
})
export class CreditDescriptionsModule {}
