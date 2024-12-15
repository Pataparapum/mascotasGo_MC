import { Module } from '@nestjs/common';
import { CuidadoresModule } from './cuidadores/cuidadores.module';
import { MascotasModule } from './mascotas/mascotas.module';
import { TrabajoModule } from './trabajo/trabajo.module';
import { welcomeController } from './welcome.controller';
import { PrismaService } from './prisma.service';

@Module({
  imports: [
    CuidadoresModule,
    MascotasModule,
    TrabajoModule
  ],
  providers: [PrismaService],
  controllers:[welcomeController]
})
export class AppModule {}
