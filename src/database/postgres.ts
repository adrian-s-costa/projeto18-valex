import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pg;

const user:string = 'postgres';
const password:string = process.env.POSTGRE_PASSWORD;
const host:string = process.env.POSTGRE_HOST;
const port:number = Number(process.env.POSTGRE_PORT);
const database:string = 'valex';

const connection = new Pool({
  user,
  password,
  host,
  port,
  database
});

export default connection;