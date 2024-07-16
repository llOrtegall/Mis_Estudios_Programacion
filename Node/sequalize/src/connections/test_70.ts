import { Sequelize } from 'sequelize';
import 'dotenv/config';

const USER = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;
const HOST = process.env.DB_HOST;
const PORT = process.env.DB_PORT as string;
const DB = process.env.DB_NAME;

const test_70 = new Sequelize({
  database: DB,
  username: USER,
  password: PASSWORD,
  host: HOST,
  port: parseInt(PORT),
  dialect: 'mysql'
});

export { test_70 }