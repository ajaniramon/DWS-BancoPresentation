app.controller("DeleteController",DeleteController);
function DeleteController($scope,$http,$routeParams){
       function getParameterByName(name) {
        var regexS = "[\\?&]" + name + "=([^&#]*)",
                regex = new RegExp(regexS),
                results = regex.exec(window.location.search);
        if (results == null) {
            return "";
        } else {
            return decodeURIComponent(results[1].replace(/\+/g, " "));
        }
    }

      $http({
    method: 'DELETE', 
    url: '/banco_api/api/entidadBancaria/'+ $routeParams.idEntidadBancaria
  }).success(function(data, status, headers, config) {
     $scope.mensaje = data;
  }).error(function(data, status, headers, config) {
      alert("Ha fallado la petición. Estado HTTP:"+status);
  });
}
DeleteController.$inject = ["$scope", "$http", "$routeParams"];
