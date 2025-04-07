import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateSchema1744000920007 implements MigrationInterface {
    name = 'CreateSchema1744000920007'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "establishment" ("is_active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "establishment_id" BIGSERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_48297b8d13bd60cbad537ed3545" PRIMARY KEY ("establishment_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "establishment"`);
    }

}
