import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class LotSchema {
    constructor(
    ){}
    @PrimaryGeneratedColumn('increment', {type: 'bigint'})
    lotId: string;
}