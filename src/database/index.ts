import { createConnection, getConnectionOptions } from 'typeorm';
import { Category } from '../modules/entities/Category';
import { Videos } from '../modules/entities/Videos';

import dotenv from 'dotenv';

dotenv.config();

createConnection({
  type: 'postgres',
  host: 'database_crud_node',
  port: 5432,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: [Category, Videos],
  synchronize: true,
}).then(connection => {
  console.log('Connection established');
}).catch(error => {
  console.log(error);
});