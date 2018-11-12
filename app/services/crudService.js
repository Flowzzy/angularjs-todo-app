
angular.module('todoApp')
    .service('crudAPIService', function ($http) {

        this.getTodos = function () {
            return $http.get("/todos");
        }

        this.addTodo = function (todo) {
            $http.post("/addTodo", { "name": todo, "complete": "0" })
        }


        this.removeItem = function (todo) {
            $http.delete("/deleteTodo/" + todo.id)
        }

    });



  // $scope.completeTodo = function (todo) {

  //   $http.put("/completeTodo/" + todo.id).then(function (data, status) {
  //     getTodos();
  //   })
  // }

//   $scope.removeItem = function (todo) {
//     console.log(todo);
//     $http.delete("/deleteTodo/" + todo.id).then(function (data, status) {
//       getTodos();
//     })
//   }

//   getTodos();

  // $scope.$watch(function () {
  //   return $scope.checkbox;
  // }, function () {
  //   $scope.checkbox = Number($scope.checkbox);
  //   console.log($scope.checkbox, typeof $scope.checkbox);
  // }, true);



// myApp.directive("todoListView", function () {
//   return {
//     restrict: 'AECM',
//     templateUrl: '/app/directives/todoList.html',
//     replace: true,
//     controller: 'TodoListController',
//     scope: {
//         todoList: "=",
//         errorMessage: "@"
//     },

// }});

