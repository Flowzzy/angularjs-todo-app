

var myApp = angular.module('todoApp', []);

myApp.controller('TodoListController', function ($scope, $http) {

  var url = "/todos";

  var getTodos = function () {
    $http.get(url).then((response) => {
      $scope.todoList = response.data;
    }, (response) => {
      console.log(response);
      $scope.getErrMsg = "Error Status: " + response;
    });
  }

  $scope.addTodo = function () {
    $http.post("/addTodo", { "name": $scope.newTodo, "complete": "0" }).then(function (data, status) {
      $scope.newTodo = "";
      getTodos();
    })
  }

  $scope.completeTodo = function (todo) {

    $http.put("/completeTodo/" + todo.id).then(function (data, status) {
      getTodos();
    })
  }

  $scope.removeItem = function (todo) {
    console.log(todo);
    $http.delete("/deleteTodo/" + todo.id).then(function (data, status) {
      getTodos();
    })
  }

  getTodos();

  // $scope.$watch(function () {
  //   return $scope.checkbox;
  // }, function () {
  //   $scope.checkbox = Number($scope.checkbox);
  //   console.log($scope.checkbox, typeof $scope.checkbox);
  // }, true);

});

myApp.directive("todoListView", function () {
  return {
    restrict: 'AECM',
    templateUrl: '/app/directives/todoList.html',
    replace: true,
    controller: 'TodoListController',
    scope: {
        todoList: "=",
        errorMessage: "@"
    },
    
}});

