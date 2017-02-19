angular.module('detail.service',[])
.service('detailService',[
	function() {
		this.say = function() {
			console.log('hello detail');
		}
	}
	])