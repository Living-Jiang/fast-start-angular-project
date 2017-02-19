angular.module('detail.controller',['detail.service'])
.controller('detailController',[
	'$scope',
	'detailService',
	function($scope,detailService){
		$scope.text='hello detail';
		$scope.say = detailService.say;

	}]);