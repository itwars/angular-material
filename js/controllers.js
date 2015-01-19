'use strict';

angular.module('myApp.controllers',[])
  .controller('MyIndex', ['$scope','$http', '$location', function MyIndex($scope, $http, $location) {
        $http.get('data/test.json').
        success(function(data) {
                $scope.test = data;
        }).
        error(function() {
        });
  }]);
