angular.module('other.route',[])
.config([
	'$stateProvider',
	function($stateProvider) {
		$stateProvider
		.state('page1.other',{
			url:'/other',
			 views: {
            	'other': {
                	templateUrl:'pages/page1.other/page1.other.html',
					controller:'otherController'
            	},
        	}
		})
	}
	])

