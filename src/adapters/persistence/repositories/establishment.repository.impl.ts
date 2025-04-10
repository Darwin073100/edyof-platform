import { EstablishmentEntity } from "@/core/establishment/domain/establishment.entity";
import { EstablishmentRepository } from "@/core/establishment/domain/establishment.repository";
import { Repository } from "typeorm";
import { EstablishmentSchema } from "../schemas/establishment.schema";
import { AppDataSource, getDataSource } from "@/infraestructure/database/app.data.source";
import { EstablishmentMapper } from "../mappers/establishment.mapper";

export class EstablishmentRepositoryImpl implements EstablishmentRepository {
    
    private repository: Repository<EstablishmentSchema>;

    async init():Promise<this>{
        const dataSource = await getDataSource();
        this.repository = dataSource.getRepository(EstablishmentSchema);
        return this;
    }

    async save(entity: EstablishmentEntity): Promise<EstablishmentEntity> {
            const schema = EstablishmentMapper.toPersistence( entity );
            const result = await this.repository.save(schema); 
            return EstablishmentMapper.toDomain(result);  
    }
    findAll(): Promise<EstablishmentEntity[]> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<EstablishmentEntity> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}