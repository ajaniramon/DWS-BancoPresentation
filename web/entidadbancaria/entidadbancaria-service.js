function EntidadBancariaService($http, $routeParams) {
    this.list = function () {
        var response = $http(config = {
            method: 'GET',
            url: '/banco_api/api/entidadBancaria'
        });
        return response;
    };

    this.get = function (idEntidadBancaria) {
        var response = $http(config = {
            method: 'GET',
            url: '/banco_api/api/entidadBancaria/' + idEntidadBancaria

        });
        return response;
    };

    this.delete = function (idEntidadBancaria) {
        var response = $http(config = {
            method: 'DELETE',
            url: '/banco_api/api/entidadBancaria/' + idEntidadBancaria

        });
        return response;
    };

    this.insert = function (entidadBancaria) {
        var response = $http({
            method: 'POST',
            url: '/banco_api/api/entidadBancaria/',
            data: entidadBancaria

        });
        return response;
    };

    this.update = function (entidadBancaria) {
        var response = $http({
            method: 'PUT',
            url: '/banco_api/api/entidadBancaria/',
            data: entidadBancaria

        });
        return response;
    };

}
EntidadBancariaService.$inject = ['$http', '$routeParams'];
app.service("entidadBancariaService", EntidadBancariaService);