app.controller("DeleteController",DeleteController);
function DeleteController($scope,entidadBancariaService,$routeParams){
var response;
response = entidadBancariaService.delete($routeParams.idEntidadBancaria);

      response.success(function(data, status, headers, config) {
     $scope.mensaje = "Borrado OK";
  }).error(function(data, status, headers, config) {
      alert("Ha fallado la petición. Estado HTTP:"+status);
  });
}
DeleteController.$inject = ["$scope", "entidadBancariaService", "$routeParams"];
