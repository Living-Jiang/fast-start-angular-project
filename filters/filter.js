/*
* @Author: Living Jiang
* @Date:   2017-02-19 15:11:26
* @Last Modified by:   Living Jiang
* @Last Modified time: 2017-02-19 15:17:21
*/

angular.module('filter.replaceHello',[])
.filter('replaceHello',function(){  
        return function(input,n1,n2){    
            return input.replace(/hello/,'HELLO');  
        }  
    })  