import type { EstablishmentEntity } from "../../domain/establishment.entity";
import type { EstablishmentRepository } from "../../domain/establishment.repository";

export class CreateEstablishmentUseCase{
    constructor(
        private readonly establishmentRepository: EstablishmentRepository,
    ){}

    async create(name: string): Promise<EstablishmentEntity>{
        return await this.establishmentRepository
            .save({
                name
        });
    }
}