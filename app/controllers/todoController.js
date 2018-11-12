

var myApp = angular.module('todoApp', []);

myApp.controller('TodoListController',['$scope', '$http', 'crudAPIService',  function ($scope, $http, crudAPIService) {

  var url = "/todos";

  var getTodos = function () {
    crudAPIService.getTodos().then((response) => {
      $scope.todoList = response.data;
    }, (response) => {
      $scope.getErrMsg = "Error Status: " + response;
    });
  }

  $scope.addTodo = function () {
    crudAPIService.addTodo($scope.newTodo)
      $scope.newTodo = "";
      getTodos();
  }

  $scope.removeItem = function (todo) {
    crudAPIService.removeItem(todo)
      getTodos();
  }

  getTodos();

}]);
