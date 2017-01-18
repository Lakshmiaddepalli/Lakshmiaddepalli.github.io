(function () {
'use strict';

angular.module('ShoppingList')
.service('ShoppingListService', ShoppingListService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


ShoppingListService.$inject = ['$http', 'ApiBasePath']
function ShoppingListService($http, ApiBasePath) {
  var service = this;

 
  service.getAllCategories = function () {
   return $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    }).then(function(response) {

                            var values = response.data;
                            console.log(values);
                            return values;                

                    }, function(response) {
                        // something went wrong
                        return "No Data";
                    });
  };


    service.getMenuForCategory = function (shortName) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        category: shortName
      }
    }).then(function(response) {

                            var values = response.data;
                            console.log(values);
                            return values;                

                    }, function(response) {
                        // something went wrong
                        return "No Data";
                    });

  };
}

})();
