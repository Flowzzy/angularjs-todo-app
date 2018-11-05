
var mysql = require("mysql");

// // Connection a db
 const connection = module.exports.connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'todoDB'
});

module.exports.connectDB = function () {
  connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
  });
}

