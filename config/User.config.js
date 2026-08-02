let {Pool} = require("pool");

const pool = new Pool({
user:process.env.DB_USER,
password:DB_PASSWORD,
host:DB_HOST,
port:DB_PORT,
database:DB_NAME
})
