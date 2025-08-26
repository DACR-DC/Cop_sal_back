const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'sql3.freesqldatabase.com',
  user: 'sql3796152',
  port:  '3306',
  password: 'yrpt8Lum6l',
  database: 'sql3796152'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Conectado a la base de datos MySQL');
});



module.exports = db;