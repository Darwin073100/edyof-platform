"use server"
import { EstablishmentRepositoryImpl } from "@/adapters/persistence/repositories/establishment.repository.impl";
import { CreateEstablishmentUseCase } from "@/core/establishment/application/use-case/create.establishment.use-case"

export async function createEstablishmentAction(name: string){
    const establishmentRepository = await new EstablishmentRepositoryImpl().init();
    const createEstablishmentUseCase = new CreateEstablishmentUseCase(establishmentRepository);
    await createEstablishmentUseCase.create(name);
}