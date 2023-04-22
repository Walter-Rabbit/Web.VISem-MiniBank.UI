import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { JwtModule } from '@nestjs/jwt';
import { PrismaClient } from '@prisma/client';

@Module({
  /*  imports: [
      JwtModule.register({
        global: true,
        secret: 'secret',
        signOptions: { expiresIn: '60s' },
      }),
    ],*/
  controllers: [UsersController],
  providers: [UsersService, PrismaClient],
})
export class UsersModule {}
