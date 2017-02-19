angular.module('page1.controller',['page1.service'])
.controller('page1Controller',[
	'$scope',
	'page1Service',
	function($scope,page1Service){
		$scope.text='hello page1';
		$scope.say = page1Service.say;

	}]);