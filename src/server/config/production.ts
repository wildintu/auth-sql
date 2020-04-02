//these values will be filled in at the correct time by heroku
export default {
    mysql: {
        connectionLimit: 10,
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_SCHEMA 
    },
    auth: {
        secret: process.env.SECRET
    }
}