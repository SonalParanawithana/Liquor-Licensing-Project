const mysql = require('mysql2');
//dotenv

//mysql connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "liquordata",
});

module.exports = {db}