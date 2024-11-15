import { IsNotEmpty, IsString, MinLength } from "class-validator"

export class mascotasDto {
    
    id:string

    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    nombre:string

    @IsString()
    @IsNotEmpty()
    userId:string

    @IsString()
    @IsNotEmpty()
    raza:string

    @IsString()
    @IsNotEmpty()
    detalles:string
}