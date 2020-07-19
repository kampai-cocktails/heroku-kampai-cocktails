exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    
    // unique ID
    table.increments().index();

    // name
    table.string("name", 100).notNullable().index();

    // email
    table.string("email", 70).unique().notNullable().index();

    // password
    table.string("password", 70).notNullable();

    // drinks array
    table.json("drinks");

    // time account was created
    table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
