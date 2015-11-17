app.controller("UpdateController", UpdateController);

function UpdateController($scope, entidadBancariaService, $routeParams) {


    $scope.entidadBancaria = {};
    $scope.entidadBancaria.idEntidadBancaria = $routeParams.id;

    $scope.actualizar = function () {
        var response = entidadBancariaService.update($scope.entidadBancaria);
        response.success(function (data, status, headers, config) {
            alert("OK");
        }).error(function (data, status, headers, config) {
            alert("Ha fallado la petición. Estado HTTP:" + status);
            console.log(data);
        });
    }
}

UpdateController.$inject = ["$scope", "entidadBancariaService", "$routeParams"];