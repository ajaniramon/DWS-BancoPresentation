app.controller("IndexController", IndexController);
IndexController.$inject=['$scope','$http'];
function IndexController($scope, $http) {
    $http({
        method: 'GET',
        url: '/banco_api/api/entidadBancaria'
    }).success(function (data, status, headers, config) {
        $scope.entidadesBancarias = data;
    }).error(function (data, status, headers, config) {
        alert("Ha fallado la petición. Estado HTTP:" + status);
    });
}

app.controller("GetController", ["$scope", "$routeParams", "$http", function ($scope, $routeParams, $http) {

        $http({
            method: 'GET',
            url: '/banco_api/api/entidadBancaria/' + $routeParams.idEntidadBancaria

        }).success(function (data, status, headers, config) {
            $scope.entidadBancaria = data;
        }).error(function (data, status, headers, config) {
            alert("Ha fallado la petición. Estado HTTP:" + status);
            console.log(data);
        });

    }]);

app.controller("DeleteController", ["$scope", "$routeParams", "$http", function ($scope, $routeParams, $http) {

        $http({
            method: 'DELETE',
            url: '/banco_api/api/entidadBancaria/' + $routeParams.idEntidadBancaria

        }).success(function (data, status, headers, config) {
            $scope.mensaje = "BORRADO";
        }).error(function (data, status, headers, config) {
            alert("Ha fallado la petición. Estado HTTP:" + status);
            console.log(data);
        });

    }]);