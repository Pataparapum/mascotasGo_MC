import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';

import { Response } from 'express';

@Controller()
export class welcome {
    @Get()
    welcome(@Res() response:Response) {
        return response.json({message:"bienvenido al servicio de cuidadores y mascotas"})
    }
}