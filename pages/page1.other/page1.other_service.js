angular.module('other.service',[])
.service('otherService',[
	function() {
		this.say = function() {
			console.log('hello other');
		}
	}
	])