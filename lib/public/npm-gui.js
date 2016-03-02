webpackJsonp([1],[function(e,n,o){o(1),o(2),o(6),o(7),o(8),o(10),o(9),o(5),o(4),o(3)},function(e,n){!function(){"use strict";angular.module("npm-gui",["ngAnimate","ngRoute","ui.bootstrap"])}()},function(e,n){!function(){"use strict";angular.module("npm-gui").config(["$routeProvider","$locationProvider",function(e,n,o){e.when("/dependencies",{templateUrl:"app/modules/index.modules.html",controller:"ModulesController",controllerAs:"modules",resolve:{modules:["ListService",function(e){return e.modules}]}}).when("/dependencies-dev",{templateUrl:"app/modules/index.modules.html",controller:"ModulesController",controllerAs:"modules",resolve:{modules:["ListService",function(e){return e.devModules}]}}).when("/tasks",{templateUrl:"app/tasks/index.tasks.html",controller:"TasksController",controllerAs:"tasks"}).when("/builder",{templateUrl:"app/builder/index.builder.html",controller:"BuilderController",controllerAs:"builder"}).otherwise("/dependencies"),n.html5Mode(!1)}])}()},function(e,n){!function(){"use strict";function e(e,n){function o(){u.args.push({type:"",value:""})}function t(e){u.args.splice(e,1)}function r(){var n="./node_modules/"+u.command+"/bin/"+u.command;angular.forEach(u.args,function(e){n+=" "+e.value}),e.tasks.add(u.newTaskName,n)}var u=this;u.command=null,u.dependencies=e.modules.get(),u.devDependencies=e.devModules.get(),u.types=["flag","path"],u.args=[{type:"flag",value:"-d"},{type:"path",value:"./lib/helpers/*"}],u.addArg=o,u.removeArg=t,u.save=r,n.$watch("builder.command",function(){console.log(u.command)})}angular.module("npm-gui").controller("BuilderController",e),e.$inject=["ListService","$scope"]}()},function(e,n){!function(){"use strict";function e(e){function n(){e.clearLog()}var o=this;o.clearConsole=n,o.log=e.getLog()}angular.module("npm-gui").controller("ConsoleController",e),e.$inject=["ConsoleService"]}()},function(e,n){!function(){"use strict";function e(e){function n(){l=new WebSocket("ws://"+location.host),l.onmessage=function(n){e(function(){u.data=u.data+n.data})}}function o(){return u}function t(){u.data=""}function r(){}var u={data:""},l=null;return n(),{getLog:o,clearLog:t,sendCommand:r}}angular.module("npm-gui").factory("ConsoleService",e),e.$inject=["$timeout"]}()},function(e,n){!function(){"use strict";function e(e){function n(n){function o(){a.clearFlags(),a.loading=!0;var o={method:"GET",url:"/"+n};return e(o).success(t).error(r),a}function t(e){angular.copy(e,a.data),a.clearFlags()}function r(){a.clearFlags(),a.error=!0}function u(o,t){var r={method:"PUT",url:"/"+n,data:{key:o,value:t}};e(r)}function l(o){var t={method:"DELETE",url:"/"+n+"/"+o};e(t)}var a={loading:!1,error:!1,data:[],clearFlags:function(){this.loading=!1,this.error=!1}};return{get:o,add:u,remove:l}}return n}angular.module("npm-gui").factory("ListFactory",e),e.$inject=["$http"]}()},function(e,n){!function(){"use strict";function e(e){var n=new e("modules"),o=new e("devModules"),t=new e("tasks");return{modules:n,devModules:o,tasks:t}}angular.module("npm-gui").factory("ListService",e),e.$inject=["ListFactory"]}()},function(e,n){!function(){"use strict";function e(e){function n(){e.add(u.newModuleName,u.newModuleVersion),u.newModuleName="",u.newModuleVersion=""}function o(n){e.remove(n.key)}function t(){u.list=e.get()}function r(){u.list=e.get()}var u=this;t(),u.addModule=n,u.removeModule=o,u.loadModules=t,u.reinstallModules=r}angular.module("npm-gui").controller("ModulesController",e),e.$inject=["modules"]}()},function(e,n){!function(){"use strict";function e(e,n){function o(){e.tasks.add(l.newTaskName,l.newTaskCommand),l.newTaskName="",l.newTaskCommand=""}function t(n){e.tasks.remove(n.key)}function r(e){n.run(e.key)}function u(){l.list=e.tasks.get()}var l=this;u(),l.addTask=o,l.removeTask=t,l.runTask=r,l.loadTasks=u}angular.module("npm-gui").controller("TasksController",e),e.$inject=["ListService","TasksService"]}()},function(e,n){!function(){"use strict";function e(e){function n(n){var o={method:"POST",url:"/tasks/"+n};e(o)}return{run:n}}angular.module("npm-gui").factory("TasksService",e),e.$inject=["$http"]}()}]);