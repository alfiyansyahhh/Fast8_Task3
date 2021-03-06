require('dotenv').config()

const env = {
    DB_USERNAME : process.env.DB_USERNAME,
    DB_PASSWORD : process.env.DB_PASSWORD,
    DB_NAME     : process.env.DB_NAME,
    DB_HOST     : process.env.DB_HOST,
};
module.exports = env