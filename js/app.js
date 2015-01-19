'use strict';

angular.module('myApp', [
  'ngRoute',
  'ngMaterial',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$compileProvider',function($compileProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|im):/);
}
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/index', {templateUrl: 'partials/view1.html'   , controller: 'MyIndex'});
  $routeProvider.otherwise({redirectTo: '/index'});
}]);
