

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
  
  // // Adding Data
  var addTodo = function (){ 
    // const todo = { name: $scope.todoList.name, complete: false };

    var todo = { id: "10", name: 'Test todo Controller', complete: false };

    var req = {
        method: 'POST',
        url: '/addTodo',
        headers: {
          'Content-Type':'x-www-form-urlencoded'
        },
        data: { todo: "Message" }
       }

    $http.post(req).then(function(data){
    console.log('Last insert ID:', data.insertId);
    getTodos();
    });
  }

  getTodos();
  addTodo();

});

