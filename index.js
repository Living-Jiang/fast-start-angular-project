/*
* @Author: Living Jiang
* @Date:   2017-02-19 19:04:01
* @Last Modified by:   Living Jiang
* @Last Modified time: 2017-02-19 20:40:52
*/

var angular = require('angular');

// 引入入口app需要的文件
    require("./js/app.js")(angular);
    require("./js/service.js")(angular);
    require("./js/controller.js")(angular);
    require("./js/globel.js")(angular);
    require("./js/route.js")(angular);
// 引入page1文件
    require("./pages/page1/page1.js")(angular);
    require("./pages/page1/page1_controller.js")(angular);
    require("./pages/page1/page1_route.js")(angular);
    require("./pages/page1/page1_service.js")(angular);
// 引入page1.detail的文件 -->
    require("./pages/page1.detail/page1.detail.js")(angular);
    require("./pages/page1.detail/page1.detail_controller.js")(angular);
    require("./pages/page1.detail/page1.detail_route.js")(angular);
    require("./pages/page1.detail/page1.detail_service.js")(angular);
// 引入page1.other的文件 -->
    require("./pages/page1.other/page1.other.js")(angular);
    require("./pages/page1.other/page1.other_controller.js")(angular);
    require("./pages/page1.other/page1.other_route.js")(angular);
    require("./pages/page1.other/page1.other_service.js")(angular);
// 引入directives文件 -->
    require("./directives/directive.js")(angular);
// 引入filters文件 -->
    require("./filters/filter.js")(angular);
