
const express = require('express');
const routes = require('express').Router();
const connector = require("./connection.js");

const connection = connector.connection;


// Default page
routes.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});


// Retrieve all todos 
routes.get('/todos', function (req, res) {
  connection.query('SELECT * FROM todos', function (error, data, fields) {
    if (error) throw error;
    return res.send(JSON.stringify(data));
  });
});


// Add a new todo  
routes.post('/addTodo', function (req, res) {

  connection.query("INSERT INTO todos SET ? ", { "name": req.body.name, "complete": req.body.complete }, function (error, results, fields) {
    if (error) throw error;
    console.log('Task inserted');
    return res.send({ error: false, data: results, message: 'New task has been created successfully.' });
  });
});

routes.put('/completeTodo/:id', function (req, res) {

  let task_id = req.params.id;

  connection.query("UPDATE todos SET complete = 1 WHERE id = ?", [task_id], function (error, results, fields) {
    if (error) throw error;
    return res.send({ error: false, data: results, message: 'Task has been completed successfully.' });
  });
});

// //  Update todo status with id
// app.put('/updateTodo', function (req, res) {

//     var todo_status;
//     let todo_id = req.body.todo_id;
//     let todo_complete = req.body.todo_complete

//     if (todo_complete)
//         todo_status = 1;
//     else
//         todo_status = 0;

//     connection.query("UPDATE todos SET complete = ? WHERE id = ?", [todo_status, todo_id], function (error, results, fields) {
//         if (error) throw error;
//         return res.send({ error: false, data: results, message: 'Task has been updated successfully.' });
//     });
// });

//  Delete todo
routes.delete('/deleteTodo/:id', function (req, res) {

  let task_id = req.params.id;

  connection.query('DELETE FROM todos WHERE id = ?', [task_id], function (error, results, fields) {
    if (error) throw error;
    return res.send({ error: false, data: results, message: 'Task has been deleted successfully.' });
  });
});

module.exports = routes;