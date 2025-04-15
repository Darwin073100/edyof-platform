import { BaseSchema } from "../../../../shared/persistence/base.schema.ts";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'establishment'})
export class EstablishmentSchema extends BaseSchema {
    @PrimaryGeneratedColumn('increment', {type: 'bigint', name: 'establishment_id' })
    establishmentId?: string;
    @Column({name: 'name', type: 'varchar', nullable: false})
    name: string;
}