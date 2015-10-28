app.controller("GetController", GetController);
function GetController($scope, entidadBancariaService, $routeParams) {
var response;
response = entidadBancariaService.get($routeParams.idEntidadBancaria);


    response.success(function (data, status, headers, config) {
        $scope.entidadBancaria = data;
    }).error(function (data, status, headers, config) {
        alert("Ha fallado la petición. Estado HTTP:" + status);
        console.log(data);
    });

}
GetController.$inject = ["$scope", "entidadBancariaService", "$routeParams"];