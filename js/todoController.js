

angular.module('todoApp', [])
.controller('TodoListController', function($scope, $http, $location) {  
  
  var url = "/todos";
              
  var getTodos = function(){
      $http.get(url).then((response) => {
      $scope.todoList = response.data;
  }, (response) => {
      $scope.getErrMsg = "Error Status: " +  response;
  });
}

  $scope.addTodo = function(){
        $http.post("/addTodo", {"name":$scope.newTodo, "complete":"0"}).then(function(data, status) {
        $scope.newTodo = "";
          getTodos();
      })
  }

  $scope.completeTodo = function(todo){

    $http.put("/updateTodo", {"todo_id":todo.id, "todo_complete":todo.complete}).then(function(data, status) {
          getTodos();
      })
  }

  $scope.deleteTodo = function(){
    $http.delete("/deleteTodo", {"todo_id":$scope.todo.id}).then(function(data, status) {
          getTodos();
      })
  }

  getTodos();


});

