import { MigrationInterface, QueryRunner, Table } from 'typeorm';

const usersTable = new Table({
    name: 'users',
    columns: [
        {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
        },
        {
            name: 'name',
            type: 'varchar',
        },
        {
            name: 'email',
            type: 'varchar',
            isUnique: true,
        },
        {
            name: 'password',
            type: 'varchar',
        },
        {
            name: 'avatar',
            type: 'varchar',
            isNullable: true,
        },
        {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
        },
    ],
});

export class CreateUsers1653328534678 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(usersTable);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }
}
