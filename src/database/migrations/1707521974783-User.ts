import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class User1707521974783 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "user_id",
                        type: "string",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "string",
                        isNullable: false
                    },
                    {
                        name: "email",
                        type: "string",
                        isUnique: true,
                        isNullable: false
                    },
                    {
                        name: "password",
                        type: "string",
                        isNullable: false
                    },
                    {
                        name: "balance",
                        type: "number"
                    }

                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users")
    }

}
