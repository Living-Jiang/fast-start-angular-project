module.exports = function(angular) {
	angular.module('app',[
		require('angular-ui-router'),
		'app.route',
		'app.globel',
		'app.service',
		'app.controller',
		'app.page1',
		'directive.autoFocus',
		'filter.replaceHello'
		]);
}
