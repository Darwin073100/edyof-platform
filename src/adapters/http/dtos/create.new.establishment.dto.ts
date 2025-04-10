import { IsNotEmpty, IsString } from "class-validator";

export class CreateNewEstablishmentDto {
    @IsString()
    @IsNotEmpty()
    name: string
}