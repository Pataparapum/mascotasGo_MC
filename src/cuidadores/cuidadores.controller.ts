import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { CuidadoresService } from './cuidadores.service';
import { Response } from 'express';
import { cuidadoresDto } from '../dto/cuidadores.dto';

@Controller('cuidadores')
export class CuidadoresController {

    constructor(private cuidadorDb: CuidadoresService){}

    @Post()
    add(@Body() user:cuidadoresDto, @Res() response:Response){
        return this.cuidadorDb.addCuidador(user, response);
    }

    @Put(':id')
    put(@Param('id') id:string, @Body() user:cuidadoresDto, @Res() response:Response){
        return this.cuidadorDb.updateCuidador(id, user, response);
    }

    @Delete(':userId')
    delete(@Param('userId') user:string, @Res() respones:Response){
        return this.cuidadorDb.deleteCuidador(user, respones);
    }

    @Get()
    getAll(@Res() response:Response){
        return this.cuidadorDb.getAll(response);
    }

    @Get(':id')
    getOne(@Param('id') user:string, @Res() response:Response){
        return this.cuidadorDb.getByUserId(user, response);
    }
}
