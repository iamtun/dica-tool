const { Client } = require('pg');


const client = new Client({
    user: '',
    host: '',
    database: '',
    password: '',
    port: 54321, // Default PostgreSQL port
});


module.exports = {client}
