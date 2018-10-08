

angular.module('todoApp', [])
  .controller('TodoListController', function($scope, $http, $location) {
    
    $scope.todoList = function(){
		var url = "/todos";
		
		$http.get(url).then((response) => {
			$scope.todoList = response;
		}, (response) => {
			$scope.getErrMsg = "Error Status: " +  response.statusText;
		});
	}
  });