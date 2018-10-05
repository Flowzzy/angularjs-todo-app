//app.js

const mysql = require('mysql');
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

// // Adding Data
// const employee = { name: 'Winnie', location: 'Australia' };
// connection.query('INSERT INTO employees SET ?', employee, (err, res) => {
//   if(err) throw err;

//   console.log('Last insert ID:', res.insertId);
// });




// Read Data
var getTodoList = connection.query('SELECT * FROM todos', (err,rows) => {
    if(err) throw err;
  
    console.log('Data received from Db:\n');
    console.log(rows);
    return rows;
  }); 



// //   Update data
// connection.query(
//     'UPDATE employees SET location = ? Where ID = ?',
//     ['South Africa', 5],
//     (err, result) => {
//       if (err) throw err;
  
//       console.log(`Changed ${result.changedRows} row(s)`);
//     }
//   );


//   Delete data
// connection.query(
//     'DELETE FROM employees WHERE id = ?', [5], (err, result) => {
//       if (err) throw err;
  
//       console.log(`Deleted ${result.affectedRows} row(s)`);
//     }
//   );