var myApp = angular.module('todoApp');

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
  
    }
  });
  