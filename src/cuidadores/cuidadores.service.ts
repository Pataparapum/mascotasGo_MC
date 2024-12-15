import { Response } from 'express';
import { Injectable } from '@nestjs/common';
import { cuidadoresDto } from '../dto/cuidadores.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CuidadoresService {

    constructor(private prisma:PrismaService){}

    async addCuidador(cuidador:cuidadoresDto, response:Response): Promise<Response> {
        await this.prisma.cuidador.create({data: cuidador}).catch((err)=>{
            throw response.json({err});
        })

        return response.json({status:201, message:"cuidador agregado"});
    }

    async updateCuidador(id:string, nuevoCuidador:cuidadoresDto, response:Response): Promise<Response> {
        await this.prisma.cuidador.update({
            where: {
                id: id
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

    async deleteCuidador(cuidador:string, response:Response): Promise<Response> {
        await this.prisma.cuidador.delete({
            where: {
                id: cuidador,
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

    async getByUserId(id:string, response:Response): Promise<Response> {
        const data = await this.prisma.cuidador.findUnique({
            where: {
                id: id
            }
        }).catch((err) => {
            throw response.json({err});
        })

        return response.json({status:200, data})
    };

}
