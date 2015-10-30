app.controller("InsertController", InsertController);


InsertController.$inject = ["$scope", "entidadBancariaService"];
function InsertController($scope, entidadBancariaService) {
    $scope.entidadBancaria = {};
   

    $scope.insertar = function () {
        response = entidadBancariaService.insert($scope.entidadBancaria);

        response.success(function (data, status, headers, config) {
            alert("OK");

        }).error(function (data, status, headers, config) {

            alert("Ha fallado la petición. Estado HTTP:" + status);
            console.log(data);
        });
    };
}
app.controller("InsertController", InsertController);
