import { BaseEntity } from "@/shared/types/entities/base.entity"
import { IsString, MinLength } from "class-validator";

export class EstablishmentEntity extends BaseEntity{
    @IsString()
    establishmentId?: string;
    @IsString()
    @MinLength(1)
    name: string;
} 