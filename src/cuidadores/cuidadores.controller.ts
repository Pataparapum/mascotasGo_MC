import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { CuidadoresService } from './cuidadores.service';
import { UserDto } from 'src/dto/user.dto';
import { response, Response } from 'express';
import { cuidadoresDto } from 'src/dto/cuidadores.dto';

@Controller('cuidadores')
export class CuidadoresController {

    constructor(private cuidadorDb: CuidadoresService){}

    @Post()
    add(@Body() user:cuidadoresDto, @Res() response:Response){
        return this.cuidadorDb.addCuidador(user, response);
    }

    @Put()
    put(@Body() user:cuidadoresDto, @Res() response:Response){
        return this.cuidadorDb.updateCuidador(user, response);
    }

    @Delete()
    delete(@Body() user:cuidadoresDto, @Res() respones:Response){
        return this.cuidadorDb.deleteCuidador(user, respones);
    }

    @Get()
    getAll(@Res() response:Response){
        return this.cuidadorDb.getAll(response);
    }

    @Get(':id')
    getOne(@Param('id') user:UserDto, @Res() response:Response){
        return this.cuidadorDb.getByUserId(user, response);
    }
}
