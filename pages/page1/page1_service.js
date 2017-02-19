angular.module('page1.service',[])
.service('page1Service',[
	function() {
		this.say = function() {
			console.log('hello page1');
		}
	}
	])