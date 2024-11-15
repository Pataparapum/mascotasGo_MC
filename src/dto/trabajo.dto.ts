import { IsNotEmpty, IsString } from "class-validator"

export class trabajoDto {
    id:string

    @IsString()
    petId?:string

    @IsString()
    cId?:string

    @IsString()
    @IsNotEmpty()
    direccion:string
}