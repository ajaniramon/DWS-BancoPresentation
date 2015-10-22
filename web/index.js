/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app = angular.module("app", ['ngRoute']);
app.controller("IndexController", IndexController);
function IndexController($scope, $http, $log) {
    $http({
        method: 'GET',
        url: '/banco_api/api/entidadBancaria'
    }).success(function (data, status, headers, config) {
        $scope.entidadesBancarias = data;
    }).error(function (data, status, headers, config) {
        alert("Ha fallado la petición. Estado HTTP:" + status);
    });




}
app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/insert', {
            templateUrl: "insertData.html",
            controller: "InsertController"
        });

        $routeProvider.when('/get/:idEntidadBancaria', {
            templateUrl: "get.html",
            controller: "GetController"
        });
        
         $routeProvider.when('/delete/:idEntidadBancaria', {
            templateUrl: "delete.html",
            controller: "DeleteController"
        });
        
    }]);

app.controller("GetController", ["$scope","$routeParams","$http",function($scope,$routeParams, $http) {
 
     $http({
        method: 'GET',
        url: '/banco_api/api/entidadBancaria/'+ $routeParams.idEntidadBancaria

    }).success(function (data, status, headers, config) {
        $scope.entidadBancaria = data;
    }).error(function (data, status, headers, config) {
        alert("Ha fallado la petición. Estado HTTP:" + status);
        console.log(data);
    });
 
}]);

app.controller("DeleteController", ["$scope","$routeParams","$http",function($scope,$routeParams, $http) {
 
     $http({
        method: 'DELETE',
        url: '/banco_api/api/entidadBancaria/'+ $routeParams.idEntidadBancaria

    }).success(function (data, status, headers, config) {
        $scope.mensaje = "BORRADO";
    }).error(function (data, status, headers, config) {
        alert("Ha fallado la petición. Estado HTTP:" + status);
        console.log(data);
    });
 
}]);