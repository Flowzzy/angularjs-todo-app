//Initiallising node modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var mysql = require("mysql");
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));




// default route
app.get('/', function (req, res) {
    return res.send({ error: true, message: 'hello' })
});
 
// port must be set to 8080 because incoming http requests are routed from port 80 to port 8080
app.listen(8080, function () {
    console.log('Node app is running on port 8080');
});

// // Connection a db
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'todoDB'
  });

  connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
  });

  // connect to database
//   connection.connect();



// Retrieve all todos 
app.get('/todos', function (req, res) {
    connection.query('SELECT * FROM todos', function (error, data, fields) {
        if (error) throw error;
        return res.send('Fine');
        // return res.send({data});

    });
});
