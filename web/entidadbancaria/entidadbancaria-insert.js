app.controller("InsertController", InsertController);

function InsertController($scope, entidadBancariaService) {
    $scope.entidadBancaria = {};
    var response;
    response = entidadBancariaService.insert($scope.entidadBancaria);

    $scope.insertar = function () {
        response.success(function (data, status, headers, config) {
            alert("OK");

        }).error(function (data, status, headers, config) {

            alert("Ha fallado la petición. Estado HTTP:" + status);
            console.log(data);
        });
    };
}
InsertController.$inject = ["$scope", "$http", "entidadBancariaService"];
