import { Module } from '@nestjs/common';
import { TrabajoService } from './trabajo.service';
import { TrabajoController } from './trabajo.controller';

@Module({
  providers: [TrabajoService],
  controllers: [TrabajoController]
})
export class TrabajoModule {}
