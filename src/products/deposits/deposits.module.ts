import { Module } from '@nestjs/common';
import { DepositsService } from './deposits.sercvice';
import { DepositsController } from './deposits.controller';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [DepositsController],
  providers: [DepositsService, PrismaClient],
})
export class DepositsModule {}
