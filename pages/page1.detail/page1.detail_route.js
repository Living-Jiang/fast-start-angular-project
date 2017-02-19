angular.module('detail.route',[])
.config([
	'$stateProvider',
	function($stateProvider) {
		$stateProvider
		.state('page1.detail',{
			url:'/detail',
			 views: {
            	'detail': {
                	templateUrl:'pages/page1.detail/page1.detail.html',
					controller:'detailController'
            	},
        	}
		})
	}
	])

