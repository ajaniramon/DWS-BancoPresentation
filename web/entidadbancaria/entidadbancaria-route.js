app.config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/entidadbancaria/list', {
            templateUrl: "entidadbancaria-list.html",
            controller: "ListController"
        });

        $routeProvider.when('/entidadbancaria/get/:idEntidadBancaria', {
            templateUrl: "entidadbancaria-get.html",
            controller: "GetController"
        });

        $routeProvider.when('/entidadbancaria/delete/:idEntidadBancaria', {
            templateUrl: "entidadbancaria-delete.html",
            controller: "DeleteController"
        });

       /* $routeProvider.when('/update/', {
            templateUrl: "updateData.html"
         //   controller: "UpdateController"
        });
        */
    }]);