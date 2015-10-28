app.controller("ListController", ListController);
ListController.$inject=['$scope','$http'];
function ListController($scope, $http) {
    $http({
        method: 'GET',
        url: '/banco_api/api/entidadBancaria'
    }).success(function (data, status, headers, config) {
        $scope.entidadesBancarias = data;
    }).error(function (data, status, headers, config) {
        alert("Ha fallado la petición. Estado HTTP:" + status);
    });
}

