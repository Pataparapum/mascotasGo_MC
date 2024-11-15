import { Module } from '@nestjs/common';
import { TrabajoService } from './trabajo.service';
import { TrabajoController } from './trabajo.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [TrabajoService, PrismaService],
  controllers: [TrabajoController]
})
export class TrabajoModule {}
