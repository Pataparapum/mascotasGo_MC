import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { TrabajoService } from './trabajo.service';
import { trabajoDto } from 'src/dto/trabajo.dto';
import { response, Response } from 'express';

@Controller('trabajo')
export class TrabajoController {

    constructor(private trabajoDb:TrabajoService){}

    @Post()
    add(@Body() trabajo:trabajoDto, @Res() response:Response){
        return this.trabajoDb.addTrabajo(trabajo, response);
    }

    @Put()
    put(@Body() nuevoTrabajo:trabajoDto, @Res() response:Response){
        return this.trabajoDb.updateTrabajo(nuevoTrabajo, response);
    }

    @Delete(':id')
    delete(@Param('id') id:string, @Res() response:Response ){
        return this.trabajoDb.deleteTrabajo(id, response);
    }

    @Get()
    getAll(@Res() response:Response){
        return this.trabajoDb.getAll(response);
    }

    @Get(':id')
    getOne(@Param('id') id:string, response:Response){
        return this.trabajoDb.getOne(id, response);
    }
}
