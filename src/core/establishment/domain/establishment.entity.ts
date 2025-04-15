import { BaseEntity } from "@/core/shared/domain/base.entity"
import { IsString, MinLength } from "class-validator";

export class EstablishmentEntity extends BaseEntity{
    @IsString()
    establishmentId?: string;
    @IsString()
    @MinLength(1)
    name: string;
} 