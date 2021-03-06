//Initiallising node modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var mysql = require("mysql");
var path  = require("path");
app.use(express.static('./'));
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


// Default page
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname +'/index.html'));
  });

// port 
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

// Retrieve all todos 
app.get('/todos', function (req, res) {
    connection.query('SELECT * FROM todos', function (error, data, fields) {
        if (error) throw error;
        return res.send(JSON.stringify(data));
    });
});


// Add a new todo  
app.post('/addTodo', function (req, res) {

    var task = JSON.parse(JSON.stringify(req.body));
    console.log(task);

    connection.query("INSERT INTO todos SET ? ",  {"name" : req.body.name, "complete": req.body.complete} , function (error, results, fields) {
        if (error) throw error;
        console.log('Task inserted');
        return res.send({ error: false, data: results, message: 'New task has been created successfully.' });
    });
});


//  Update todo status with id
app.put('/updateTodo', function (req, res) {
 
    var todo_status;
    let todo_id = req.body.todo_id;
    let todo_complete = req.body.todo_complete

    if (todo_complete)
        todo_status = 1;
    else
        todo_status = 0;

    connection.query("UPDATE todos SET complete = ? WHERE id = ?", [todo_status, todo_id], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Task has been updated successfully.' });
    });
});

//  Delete todo
app.delete('/deleteTodo', function (req, res) {
 
    let task_id = req.body.todo_id;
 
    connection.query('DELETE FROM todos WHERE id = ?', [task_id], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Task has been deleted successfully.' });
    });
}); 