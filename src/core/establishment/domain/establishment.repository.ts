import { BaseRepository } from "@/core/shared/domain/base.repository";
import { EstablishmentEntity } from "./establishment.entity";

export const ESTABLISHMENT_REPOSITORY = 'ESTABLISHMENT_REPOSITORY';

export interface EstablishmentRepository extends BaseRepository<EstablishmentEntity> {

}