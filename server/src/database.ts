import mysql from 'mysql2';
import keys from './keys';

const pool = mysql.createPool(keys.database);

pool.getConnection((err,connection) => {
    if (err) throw err;
    connection.release(); //lanza la conexión
    console.log('Conexión a BD establecida!');
});

export default pool;