angular.module('page1.route',[
	'detail.route',
	'other.route'
	])
.config([
	'$stateProvider',
	function($stateProvider) {
		$stateProvider
		.state('page1',{
			url:'/page1',
			templateUrl:'pages/page1/page1.html',
			controller:'page1Controller'
		})
	}
	])

