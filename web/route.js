app.config(['$routeProvider', function ($routeProvider) {
        
        $routeProvider.when('/entidad/', {
            templateUrl: "entidad.html"
         //   controller: "UpdateController"
        });

        
        
        $routeProvider.when('/insert', {
            templateUrl: "insertData.html"
         //   controller: "InsertController"
        });

        $routeProvider.when('/get/:idEntidadBancaria', {
            templateUrl: "get.html",
            controller: "GetController"
        });

        $routeProvider.when('/delete/:idEntidadBancaria', {
            templateUrl: "delete.html",
            controller: "DeleteController"
        });

        $routeProvider.when('/update/', {
            templateUrl: "updateData.html"
         //   controller: "UpdateController"
        });

  


    }]);