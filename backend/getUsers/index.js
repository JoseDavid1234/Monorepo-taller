const mysql = require('mysql2/promise');
const dotenv = require('dotenv');
const path = require('path');

// Configuración para cargar las variables de entorno
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

// Configuración de la conexión a la base de datos
const config = {
    dbHost: process.env.DB_HOST,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME
};

// Función para crear una conexión a la base de datos MySQL
async function createConnection() {
    return mysql.createConnection({
        host: config.dbHost,
        user: config.dbUser,
        password: config.dbPassword,
        database: config.dbName
    });
}

exports.handler = async (event) => {
    let response;

    try {
        const connection = await createConnection();
        
        // Consulta para seleccionar todos los usuarios
        const [results] = await connection.execute('SELECT * FROM Usuarios');
        
        // Cierra la conexión a la base de datos
        await connection.end();

        response = {
            statusCode: 200,
            body: JSON.stringify(results), // Devuelve todos los usuarios
        };
    } catch (error) {
        console.error(error);
        response = {
            statusCode: 500,
            body: JSON.stringify({ message: "Error al obtener los usuarios" }),
        };
    }

    return response;
};
