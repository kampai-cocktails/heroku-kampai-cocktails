require("dotenv").config();
const config = require("../config");

module.exports = {
  client: "pg",
  connection: config.db.connection,
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "./migrations",
  },
  useNullAsDefault: true,
};