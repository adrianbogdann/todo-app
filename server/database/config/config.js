import 'dotenv/config';

const { DB_HOST, DB_USERNAME, DB_PASSWORD } = process.env;

export default {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: 'todos_sequelize_dev',
    host: DB_HOST,
    dialect: 'postgres',
    // use_env_variable: 'DEV_DATABASE_URL'
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: 'todos_sequelize_test',
    host: DB_HOST,
    dialect: 'postgres',
    use_env_variable: 'TEST_DATABASE_URL'
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: 'todos_sequelize_prod',
    host: DB_HOST,
    dialect: 'postgres',
    use_env_variable: 'DATABASE_URL'
  }
}
