import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'docker',
    database: 'salesapi',
    synchronize: true,
    logging: true,
    entities: [],
    subscribers: [],
    migrations: ['src/shared/typeorm/migrations/*.ts'],
    migrationsTableName: 'migrations',
});

AppDataSource.initialize();
