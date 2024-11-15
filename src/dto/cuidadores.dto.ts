import { IsNotEmpty, IsString } from "class-validator"


export class cuidadoresDto {

    id:string

    @IsString()
    @IsNotEmpty()
    userId:string

    @IsString()
    @IsNotEmpty()
    estudios:string

    @IsString()
    @IsNotEmpty()
    experiencias:string

    @IsString()
    workId?:string

}