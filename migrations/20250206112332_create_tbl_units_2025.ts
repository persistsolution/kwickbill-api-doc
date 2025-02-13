import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("tbl_units_2025", (table) => {
        table.increments("id").primary();
        table.string("Name", 100).nullable();
        table.string("Name2", 100).nullable();
        table.specificType("Status", "smallint").notNullable().defaultTo(1);
        table.specificType("roll", "smallint").notNullable().defaultTo(0);
      });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("tbl_units_2025");
}

