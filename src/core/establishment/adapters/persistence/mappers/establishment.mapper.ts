import { EstablishmentEntity } from "@/core/establishment/domain/establishment.entity";
import { EstablishmentSchema } from "../schemas/establishment.schema";
import { plainToInstance } from "class-transformer";

export class EstablishmentMapper {
    static toDomain(schema?: EstablishmentSchema): EstablishmentEntity{
        const entity = plainToInstance(EstablishmentEntity, schema);
        return entity;
    }

    static toPersistence(entity?: EstablishmentEntity): EstablishmentSchema{
        const schema = plainToInstance(EstablishmentSchema, entity);
        return schema;
    }
}