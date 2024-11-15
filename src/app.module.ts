import { Module } from '@nestjs/common';
import { CuidadoresModule } from './cuidadores/cuidadores.module';
import { MascotasModule } from './mascotas/mascotas.module';

@Module({
  imports: [
    CuidadoresModule,
    MascotasModule
  ],
})
export class AppModule {}
