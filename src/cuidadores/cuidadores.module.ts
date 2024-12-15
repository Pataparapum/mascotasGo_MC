import { Module } from '@nestjs/common';
import { CuidadoresService } from './cuidadores.service';
import { CuidadoresController } from './cuidadores.controller';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [CuidadoresService, PrismaService],
  controllers: [CuidadoresController]
})
export class CuidadoresModule {}
