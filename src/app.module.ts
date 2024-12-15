import { Module } from '@nestjs/common';
import { CuidadoresModule } from './cuidadores/cuidadores.module';
import { MascotasModule } from './mascotas/mascotas.module';
import { TrabajoModule } from './trabajo/trabajo.module';
import { welcome } from './welcome.controller';

@Module({
  imports: [
    CuidadoresModule,
    MascotasModule,
    TrabajoModule
  ],
  controllers:[welcome]
})
export class AppModule {}
