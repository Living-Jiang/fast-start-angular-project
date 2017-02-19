/*
* @Author: Living Jiang
* @Date:   2017-02-19 14:45:04
* @Last Modified by:   Living Jiang
* @Last Modified time: 2017-02-19 20:09:59
*/
module.exports = function(angular) {
  angular.module('directive.autoFocus', [])
    .directive('autoFocusWhen', [function() {
        return {
            restrict: 'EA',
            template: '<input type="text">',
            link: function(scope, element) {
                element[0].children[0].focus();
            }
        }
    }])

}
