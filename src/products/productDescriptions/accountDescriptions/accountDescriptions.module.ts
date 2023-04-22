import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { AccountDescriptionsController } from './accountDescriptions.conroller';
import { AccountDescriptionsService } from './accountDescriptions.service';

@Module({
  imports: [],
  controllers: [AccountDescriptionsController],
  providers: [AccountDescriptionsService, PrismaClient],
})
export class AccountDescriptionsModule {}
