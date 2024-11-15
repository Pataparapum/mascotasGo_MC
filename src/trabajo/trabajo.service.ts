import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import { trabajoDto } from 'src/dto/trabajo.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TrabajoService {

    constructor(private prisma:PrismaService){}

    async addTrabajo(trabajo:trabajoDto, response:Response): Promise<Response> {
        await this.prisma.trabajo.create({data:trabajo}).catch((err) => {
            throw response.json({err})
        });

        return response.json({status:201, message:"trabajo creado"});
    }

    async updateTrabajo(nuevoTrabajo:trabajoDto, response:Response): Promise<Response> {
        await this.prisma.trabajo.update({
            where: {
                id: nuevoTrabajo.id
            },
            data: {
                direccion: nuevoTrabajo.direccion
            }
        }).catch((err) => {
            throw response.json({err});
        });

        return response.json({status:200, message:"dirección actualizada"});
    }

    async deleteTrabajo(id:string, response:Response): Promise<Response> {
        await this.prisma.trabajo.delete({
            where: {
                id: id
            }
        }).catch((err) => {
            throw response.json({err});
        })

        return response.json({status:200, message:"trabajo cancelado"});
    }

    async getAll(response:Response) {
        const data = await this.prisma.trabajo.findMany().catch((err) => {
            throw response.json({err});
        });

        return response.json({status:200, data});
    }

    async getOne(id:string, response:Response) {
        const data = await this.prisma.trabajo.findUnique({
            where: {
                id: id
            }
        }).catch((err) => {
            throw response.json({err});
        });

        return response.json({status:200, data});
    }
}
