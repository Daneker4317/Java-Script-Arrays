const { Client } = require('pg');
const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'qwerty',
    database: 'postgres'
});
client.connect();
let sum = 50000;
const query = `select * from client where currentaccount > ${sum}`;

client.query(query, (err, res) => {
    console.log(err ? err.stack : res.rows);
    client.end();
});