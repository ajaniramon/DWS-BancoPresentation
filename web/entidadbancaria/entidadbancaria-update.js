var app = angular.module("app", []);
app.controller("UpdateController", UpdateController);

function UpdateController($scope,$http){
    
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
    var entidadBancaria = {
        idEntidadBancaria: getParameterByName("idEntidadBancaria"),
        nombre: getParameterByName("nombre"),
        codigoEntidad: getParameterByName("codigoEntidad"),
        fechaCreacion: getParameterByName("fechaCreacion"),
        direccion: getParameterByName("direccion"),
        cif: getParameterByName("cif")
    }
$http({
        method: 'PUT',
        url: '/banco_api/api/entidadBancaria/',
        data: entidadBancaria

    }).success(function (data, status, headers, config) {
        $scope.mensaje = "ACTUALIZADO CON ÉXITO";
    }).error(function (data, status, headers, config) {
        alert("Ha fallado la petición. Estado HTTP:" + status);
        console.log(data);
    });
}