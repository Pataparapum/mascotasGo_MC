import { Module } from '@nestjs/common';
import { MascotasService } from './mascotas.service';
import { MascotasController } from './mascotas.controller';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [MascotasService, PrismaService],
  controllers: [MascotasController]
})
export class MascotasModule {}
