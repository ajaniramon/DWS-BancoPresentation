app.config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/entidadbancaria/list', {
            templateUrl: "./entidadbancaria/entidadbancaria-list.html",
            controller: "ListController"
        });

        $routeProvider.when('/entidadbancaria/get/:idEntidadBancaria', {
            templateUrl: "./entidadbancaria/entidadbancaria-get.html",
            controller: "GetController"
        });

        $routeProvider.when('/entidadbancaria/delete/:idEntidadBancaria', {
            templateUrl: "./entidadbancaria/entidadbancaria-delete.html",
            controller: "DeleteController"
        });

        $routeProvider.when('/entidadbancaria/insert/', {
            templateUrl: "./entidadbancaria/entidadbancaria-insert.html",
          controller: "InsertController"
        });
        
           $routeProvider.when('/entidadbancaria/update/', {
            templateUrl: "./entidadbancaria/entidadbancaria-update.html",
          controller: "InsertController"
        });
        
    }]);