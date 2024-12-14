import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { Response } from 'express';
import { mascotasDto } from 'src/dto/mascotas.dto';
import { MascotasService } from './mascotas.service';

@Controller('mascotas')
export class MascotasController {

    constructor(private mascotaDb:MascotasService){}

    @Post()
    add(@Body() mascota:mascotasDto, @Res() response:Response){
        return this.mascotaDb.addMascota(mascota, response);
    }

    @Put(':id')
    put(@Param('id') id:string, @Body() nuevaMascota:mascotasDto, @Res() response:Response) {
        return this.mascotaDb.updateMascota(id, nuevaMascota, response);
    }

    @Delete(':id')
    delete(@Param('id') mascotaId: string, @Res() response:Response) {
        return this.mascotaDb.deleteMascota(mascotaId, response);
    }

    @Get('user/:userId')
    getAll(@Param('userId') user:string, @Res() response:Response) {
        return this.mascotaDb.getAllMascotasFromUser(user, response);
    }

    @Get(':id')
    getOne(@Param('id') mascotaId: string, @Res() response:Response ) {
        return this.mascotaDb.getMascotaWithId(mascotaId, response);
    }
}
