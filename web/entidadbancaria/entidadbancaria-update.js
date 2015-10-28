app.controller("UpdateController", UpdateController);

function UpdateController($scope,entidadBancariaService){
    var response;
    response = entidadBancariaService.update($scope.entidadBancaria);

    $scope.entidadBancaria = {};
    $scope.actualizar=function(){
        response.success(function (data, status, headers, config) {
        alert("OK");
    }).error(function (data, status, headers, config) {
        alert("Ha fallado la petición. Estado HTTP:" + status);
        console.log(data);
    });
}
    }

UpdateController.$inject = ["$scope", "entidadBancariaService"];