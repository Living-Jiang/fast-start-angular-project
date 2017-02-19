module.exports = function(angular) {
    angular.module('app.route', ['page1.route'])
        .config([
            '$stateProvider',
            '$urlRouterProvider',
            function($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise('/index');
                $stateProvider
                    .state('index', {
                        url: '/index',
                        template: require('../templates/app_index.html'),
                        controller: 'appController'
                    })
            }
        ])
}
