import mysql from 'mysql2';
import { ENV } from './env';

let databaseInstance = null;

const connection = mysql.createConnection({
    host: ENV.HOST,
    user: ENV.DB_USERNAME,
    password: ENV.DB_PASSWORD,
    port: ENV.DB_PORT,
    database: ENV.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
    idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
    queueLimit: 0
});

export const CONNECT_DB = async () => {
    await connection.connect();
    databaseInstance = connection;
};

export const GET_DB = () => {
    if (!databaseInstance) throw new Error('Must connect to database first!');
    return databaseInstance;
};