import { Module } from '@nestjs/common';
import { CuidadoresModule } from './cuidadores/cuidadores.module';
import { MascotasModule } from './mascotas/mascotas.module';
import { TrabajoModule } from './trabajo/trabajo.module';

@Module({
  imports: [
    CuidadoresModule,
    MascotasModule,
    TrabajoModule
  ],
})
export class AppModule {}
