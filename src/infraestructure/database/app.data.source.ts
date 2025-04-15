import 'reflect-metadata';
import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import { EstablishmentSchema } from '@/core/establishment/adapters/persistence/schemas/establishment.schema';

dotenv.config();

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_NAME || 'platform_db',
    synchronize: false,
    logging: process.env.NODE_ENV === 'development',
    entities: [EstablishmentSchema],
});

export const getDataSource = async ()=>{
    if(!AppDataSource.isInitialized){
        await AppDataSource.initialize();
    }
    return AppDataSource;
}