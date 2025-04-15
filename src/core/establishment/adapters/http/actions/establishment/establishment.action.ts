"use server"
import { EstablishmentRepositoryImpl } from "@/core/establishment/adapters/persistence/repositories/establishment.repository.impl";
import { CreateEstablishmentUseCase } from "@/core/establishment/application/use-case/create.establishment.use-case"

export async function createEstablishmentAction(name: string){
    try{
        const establishmentRepository = await new EstablishmentRepositoryImpl().init();
        const createEstablishmentUseCase = new CreateEstablishmentUseCase(establishmentRepository);
        const resp = await createEstablishmentUseCase.create(name);
        return {
            establishmentId: resp.establishmentId,
            name: resp.name,
            createdAt: resp.createdAt,
            updatedAt: resp.updatedAt
        };
    } catch(error:any){
        console.log('-----------------Error codeeeeeee-------'+error.code);
        if(error?.code === '23505'){
            return {
                messageError: 'Ya existe un establecimiento con ese nombre',
                code: 409
            }
        }
    }
}