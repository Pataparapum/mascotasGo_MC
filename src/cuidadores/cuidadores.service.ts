import { Response } from 'express';
import { Injectable } from '@nestjs/common';
import { cuidadoresDto } from 'src/dto/cuidadores.dto';
import { PrismaService } from 'src/prisma.service';
import { UserDto } from 'src/dto/user.dto';
import { trabajoDto } from 'src/dto/trabajo.dto';

@Injectable()
export class CuidadoresService {

    constructor(private prisma:PrismaService){}

    async addCuidador(cuidador:cuidadoresDto, response:Response): Promise<Response> {
        await this.prisma.cuidador.create({data: cuidador}).catch((err)=>{
            throw response.json({err});
        })

        return response.json({status:201, message:"cuidador agregado"});
    }

    async updateCuidador(nuevoCuidador:cuidadoresDto, response:Response): Promise<Response> {
        await this.prisma.cuidador.update({
            where: {
                id: nuevoCuidador.id
            },
            data: {
                experiencias: nuevoCuidador.experiencias,
                estudios: nuevoCuidador.estudios,
            }
        }).catch((err) => {
            throw response.json({err});
        })

        return response.json({status:200, message:"datos actualizados"});
    }

    async deleteCuidador(cuidador:cuidadoresDto, response:Response): Promise<Response> {
        await this.prisma.cuidador.delete({
            where: {
                id: cuidador.id,
            }
        }).catch((err) => {
            throw response.json({err});
        });

        return response.json({status:200, message:"cuidador eliminado"});
    }

    async getAll(response:Response): Promise<Response> {
        const data = await this.prisma.cuidador.findMany().catch((err) => {
            throw response.json({err});
        });

        return response.json({status:200, data});
    }

    async getByUserId(id:UserDto, response:Response): Promise<Response> {
        const data = await this.prisma.cuidador.findUnique({
            where: {
                id: id.id
            }
        }).catch((err) => {
            throw response.json({err});
        })

        return response.json({status:200, data})
    };

    async addTrabajo(id:UserDto, trabajo:trabajoDto, response:Response) {
        await this.prisma.cuidador.update({
            where: {
                id: id.id
            },
            data: {
                workId: trabajo.id
            }
        }).catch((err) => {
            throw response.json({err});
        })

        return response.json({status:200, message:"trabajo agregado"});
    }
}
