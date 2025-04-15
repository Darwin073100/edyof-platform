import 'reflect-metadata';
import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { EstablishmentSchema } from '@/core/establishment/adapters/persistence/schemas/establishment.schema';

dotenv.config();

// Obtener la ruta del directorio equivalente a __dirname para módulos ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export const APP_DATA_SOURCE = 'APP_DATA_SOURCE';
export const AppDataSourceMigrations = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_NAME || 'platform_db',
    synchronize: false,
    logging: process.env.NODE_ENV === 'development',
    entities: [EstablishmentSchema],
    migrations: [join(__dirname, `migrations/*.{ts,js}`)],
    migrationsTableName: 'migrations',
    subscribers: []
});

export const getDataSource = async ()=>{
    if(!AppDataSourceMigrations.isInitialized){
        await AppDataSourceMigrations.initialize();
    }
    return AppDataSourceMigrations;
}