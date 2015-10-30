DeleteController.$inject = ["$scope", "entidadBancariaService", "$routeParams"];
function DeleteController($scope, entidadBancariaService, $routeParams) {

     entidadBancariaService.get($routeParams.idEntidadBancaria).success(function (data, status, headers, config) {
        $scope.entidadBancaria = data;
    }).error(function (data, status, headers, config) {
        alert("Ha fallado la petición. Estado HTTP:" + status);
    });


    $scope.delete = function () {
        var response;
        response = entidadBancariaService.delete($routeParams.idEntidadBancaria);

        response.success(function (data, status, headers, config) {
            $scope.mensaje = "Borrado OK";
        }).error(function (data, status, headers, config) {
            alert("Ha fallado la petición. Estado HTTP:" + status);
        });
    };

}
app.controller("DeleteController", DeleteController);

