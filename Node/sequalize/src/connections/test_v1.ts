import { Sequelize } from 'sequelize';
import 'dotenv/config';

const USER = process.env.DB_USER_PW_TEST;
const PASSWORD = process.env.DB_PASSWORD_PW_TEST;
const HOST = process.env.DB_HOST_PW_TEST;
const PORT = process.env.DB_PORT_PW_TEST as string;
const DB = process.env.DB_NAME_PW_TEST;

const test_v1 = new Sequelize({
  database: DB,
  username: USER,
  password: PASSWORD,
  host: HOST,
  port: parseInt(PORT),
  dialect: 'mysql'
});

export { test_v1 }