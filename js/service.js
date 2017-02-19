angular.module('app.service',[])
.service('appService',[
	function() {
		this.say = function() {
			console.log('hello angular');
		}
	}
	])