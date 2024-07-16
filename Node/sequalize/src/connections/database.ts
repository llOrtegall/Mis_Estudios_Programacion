import { Sequelize } from 'sequelize';

const connection = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

export { connection }