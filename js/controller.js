module.exports = function(angular) {
    angular.module('app.controller', ['app.globel'])
        .controller('appController', [
            '$scope',
            'appGlobel',
            'appService',
            function($scope, appGlobel, appService) {
                $scope.text = appGlobel.text;
                $scope.say = appService.say;

            }
        ]);
}
