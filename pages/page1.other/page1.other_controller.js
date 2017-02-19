
module.exports = function(angular) {
	angular.module('other.controller', ['other.service'])
    .controller('otherController', [
        '$scope',
        'otherService',
        function($scope, otherService) {
            $scope.text = 'hello other';
            $scope.say = otherService.say;

        }
    ]);

}