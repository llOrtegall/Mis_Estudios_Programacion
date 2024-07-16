import { Sequelize } from 'sequelize';
import 'dotenv/config';

const USER = process.env.DB_USER_METAS;
const PASSWORD = process.env.DB_PASSWORD_METAS;
const HOST = process.env.DB_HOST_METAS;
const PORT = process.env.DB_PORT_METAS as string;
const DB = process.env.DB_NAME_METAS;

const metas_92 = new Sequelize({
  database: DB,
  username: USER,
  password: PASSWORD,
  host: HOST,
  port: parseInt(PORT),
  dialect: 'mysql'
});

export { metas_92 }