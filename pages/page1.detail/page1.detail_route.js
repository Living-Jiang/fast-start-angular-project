
module.exports = function(angular) {
	angular.module('detail.route', [])
    .config([
        '$stateProvider',
        function($stateProvider) {
            $stateProvider
                .state('page1.detail', {
                    url: '/detail',
                    views: {
                        'detail': {
                            template: require('./page1.detail.html'),
                            controller: 'detailController'
                        },
                    }
                })
        }
    ])

}

