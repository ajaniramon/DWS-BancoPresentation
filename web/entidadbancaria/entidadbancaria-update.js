app.controller("UpdateController", UpdateController);

function UpdateController($scope,$http){
    

    $scope.entidadBancaria = {};
    $scope.actualizar=function(){
        $http({
        method: 'PUT',
        url: '/banco_api/api/entidadBancaria/',
        data: $scope.entidadBancaria

    }).success(function (data, status, headers, config) {
        alert("OK");
    }).error(function (data, status, headers, config) {
        alert("Ha fallado la petición. Estado HTTP:" + status);
        console.log(data);
    });
}
    }

UpdateController.$inject = ["$scope", "$http"];