
module.exports = function(angular) {
	angular.module('other.route', [])
    .config([
        '$stateProvider',
        function($stateProvider) {
            $stateProvider
                .state('page1.other', {
                    url: '/other',
                    views: {
                        'other': {
                            template: require('./page1.other.html'),
                            controller: 'otherController'
                        },
                    }
                })
        }
    ])

}

