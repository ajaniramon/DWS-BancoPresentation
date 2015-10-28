app.controller("ListController", ListController);
ListController.$inject = ['$scope','entidadBancariaService'];
function ListController($scope,entidadBancariaService) {
    var response;
     response = entidadBancariaService.list();
    response.success(function (data, status, headers, config) {
        $scope.entidadesBancarias = data;
    }).error(function (data, status, headers, config) {
        alert("Ha fallado la petición. Estado HTTP:" + status);
    });
}

