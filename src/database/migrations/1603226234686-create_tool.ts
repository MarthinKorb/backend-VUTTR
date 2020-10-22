import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTool1603226234686 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'tools',
            columns: [
                {
                    isPrimary: true,
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                  },
                  {
                    name: 'title',
                    type: 'varchar',
                  },
                  {
                    name: 'link',
                    type: 'varchar',
                  },
                  {
                    name: 'description',
                    type: 'varchar',
                  }         
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tools');
    }

}
