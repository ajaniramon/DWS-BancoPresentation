app.controller("InsertController", InsertController);

function InsertController($scope,$http){
    
     $scope.entidadBancaria = {};
    $scope.insertar = function(){
        $http({
        method: 'POST',
        url: '/banco_api/api/entidadBancaria/',
        data: $scope.entidadBancaria

    }).success(function (data, status, headers, config) {
        alert("OK");
        
    }).error(function (data, status, headers, config) {
        
        alert("Ha fallado la petición. Estado HTTP:" + status);
        console.log(data);
    });
};
    }
    InsertController.$inject = ["$scope", "$http"];
