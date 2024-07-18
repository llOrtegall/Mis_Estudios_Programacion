import { Sequelize } from 'sequelize';
import 'dotenv/config';

const USER = process.env.DB_USER_PW;
const PASSWORD = process.env.DB_PASSWORD_PW;
const HOST = process.env.DB_HOST_PW;
const PORT = process.env.DB_PORT_PW as string;
const DB = process.env.DB_NAME_PW;

const power_bi = new Sequelize({
  database: DB,
  username: USER,
  password: PASSWORD,
  host: HOST,
  port: parseInt(PORT),
  dialect: 'mysql'
});

export { power_bi }