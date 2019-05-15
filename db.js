import Sequelize from 'sequelize';
import BudgetModel from './models/Budget';
import mysql2 from 'mysql2';

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: 'mysql',
    dialectModule: mysql2, // workaround for missing import (https://github.com/sequelize/sequelize/issues/9489)
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
  }
);
const Budget = BudgetModel(sequelize, Sequelize);
const Models = { Budget };
const connection = {};

export default async () => {
  if (connection.isConnected) {
    console.log('=> Using existing connection.');
    return Models;
  };

  await sequelize.sync();
  await sequelize.authenticate();
  connection.isConnected = true;
  console.log('=> Created a new connection.');
  return Models;
}