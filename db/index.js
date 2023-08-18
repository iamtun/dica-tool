const { Client } = require('pg');

const client = new Client({
    user: '',
    host: '',
    database: '',
    password: '',
    port: 5432, // Default PostgreSQL port
});


module.exports = {client}
