import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import { mascotasDto } from '../dto/mascotas.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class MascotasService {

    constructor(private prisma:PrismaService){}

    async addMascota(mascota:mascotasDto, response:Response): Promise<Response>{
        await this.prisma.mascotas.create({data:mascota}).catch((err) => {
            return response.json({err})
        });

        return response.json({status:201, message:"mascota creada"});
    }

    async updateMascota(id:string, nuevaMascota:mascotasDto, response:Response): Promise<Response>{
        await this.prisma.mascotas.update({
            where: {
                id: id
            },
            data: {
                nombre: nuevaMascota.nombre,
                detalles: nuevaMascota.detalles,
                raza: nuevaMascota.raza
            }
        }).catch((err) => {
            return response.json({err});
        });

        return response.json({status:200, message:"mascotas actualizada"})
    }

    async deleteMascota(mascotaId:string, response:Response): Promise<Response>{
        await this.prisma.mascotas.delete({
            where:{
                id: mascotaId
            }
        }).catch((err)=> {
            return response.json({err})
        });

        return response.json({status: 200, message:"mascota eliminada"});
    }

    async getAllMascotasFromUser(userId:string, response:Response): Promise<Response> {
        const data = await this.prisma.mascotas.findMany({
            where:{
                userId: userId
            }
        }).catch((err) => {
            return response.json({err});
        });

        return response.json({status:200, data});
    }

    async getMascotaWithId(mascotaId:string, response:Response): Promise<Response>{
        const data = await this.prisma.mascotas.findUnique({
            where: {
                id: mascotaId
            }
        }).catch((err) => {
            return response.json({err});
        });

        return response.json({status:200, data});
    }
}
