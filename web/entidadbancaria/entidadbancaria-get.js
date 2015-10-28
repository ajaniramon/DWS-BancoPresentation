app.controller("GetController", GetController);
function GetController($scope, $http, $routeParams) {

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
        method: 'GET',
        url: '/banco_api/api/entidadBancaria/'+ $routeParams.idEntidadBancaria

    }).success(function (data, status, headers, config) {
        $scope.entidadBancaria = data;
    }).error(function (data, status, headers, config) {
        alert("Ha fallado la petición. Estado HTTP:" + status);
        console.log(data);
    });

}
GetController.$inject = ["$scope", "$http", "$routeParams"];