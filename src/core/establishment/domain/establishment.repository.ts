import { GenericRepository } from "@/shared/repositories/generic.repository";
import { EstablishmentEntity } from "./establishment.entity";

export const ESTABLISHMENT_REPOSITORY = 'ESTABLISHMENT_REPOSITORY';

export interface EstablishmentRepository extends GenericRepository<EstablishmentEntity> {

}