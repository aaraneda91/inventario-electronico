// config/index.js
require('dotenv').config(); // Carga las variables de entorno al inicio
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_DATABASE:', process.env.DB_DATABASE);
console.log('DB_USERNAME:', process.env.DB_USERNAME);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log(process.env.NODE_ENV )
const config = {
    app: {
        port: process.env.PORT || 3000,
        env: process.env.NODE_ENV || 'development'
    },
    database: {
        connection: process.env.DB_CONNECTION,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_DATABASE,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        url: process.env.DATABASE_URL // Útil para bases de datos en la nube (ej: MongoDB Atlas)
    }
};

module.exports = config;