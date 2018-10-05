angular.module('todoAppp', [])
  .controller('TodoListControllerr', function($http, $scope) {
    
     $http.get('/getTodoList').then(function(data) {
      $scope.todoList = data;
  });

 
  $scope.todoList.addTodo = function() {
    $scope.todoList.todos.push({text:todoList.todoText, done:false});
    $scope.todoList.todoText = '';
    };
 
    $scope.todoList.remaining = function() {
      var count = 0;
      angular.forEach($scope.todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
 
    $scope.todoList.archive = function() {
      var oldTodos = $scope.todoList.todos;
      $scope.todoList.todos = [];
      angular.forEach($scope.oldTodos, function(todo) {
        if (!todo.done) $scope.todoList.todos.push(todo);
      });
    };
  });