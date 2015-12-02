app.controller("InsertController", InsertController);


InsertController.$inject = ["$scope", "entidadBancariaService"];
function InsertController($scope, entidadBancariaService) {
    $scope.entidadBancaria = {};
   

    $scope.insertar = function () {
        response = entidadBancariaService.insert($scope.entidadBancaria);

        response.success(function (data, status, headers, config) {
            alert("OK");

        }).error(function (data, status, headers, config) {
                if(status === 400){
                    $scope.errores = data;
                }else{
                    alert("Ha fallado la petición HTTP. Estado HTTP: "+status);
                }
            
        });
    };
}
app.controller("InsertController", InsertController);
