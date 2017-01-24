(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService)
.constant('ApiBasePath', "https://lakshmiaddepalliangularjs.herokuapp.com");



MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };


service.getItem = function (shortName) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        category: shortName
      }
    }).then(function(response) {

                            var values = response.data.menu_items;
                            console.log(values);
                            return values;                

                    }, function(response) {
                        // something went wrong
                        return "No Data";
                    });

  };
}



})();
