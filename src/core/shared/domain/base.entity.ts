import { IsBoolean, IsDate } from "class-validator";

export abstract class  BaseEntity{
    @IsBoolean()
    isActive?: boolean;
    @IsDate()
    createdAt?: Date;
    @IsDate()
    updatedAt?: Date;
}