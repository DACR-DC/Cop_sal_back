const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'mysql-1dac8753-miumg-afbb.b.aivencloud.com',
  user: 'avnadmin',
  port:  '10808',
  password: 'AVNS_F7RvG1VRLpIPbBA9IRo',
  database: 'defaultdb'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Conectado a la base de datos MySQL');
});



module.exports = db;