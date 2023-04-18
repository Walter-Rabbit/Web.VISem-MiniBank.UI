import { Module } from '@nestjs/common';
import { CreditsService } from './credits.sercvice';
import { CreditsController } from './credits.controller';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [CreditsController],
  providers: [CreditsService, PrismaClient],
})
export class CreditsModule {}
