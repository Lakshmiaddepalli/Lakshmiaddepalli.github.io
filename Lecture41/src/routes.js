(function () {
'use strict';

angular.module('ShoppingList')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/shoppinglist/templates/home.template.html'
  })

  // Premade list page
  .state('mainList', {
    url: '/main-list',
    templateUrl: 'src/shoppinglist/templates/main-shoppinglist.template.html',
    controller: 'MainShoppingListController as mainList',
    resolve: {
      items: ['ShoppingListService', function (ShoppingListService) {
        console.log("%%"+ ShoppingListService.getAllCategories());
        return ShoppingListService.getAllCategories();
      }]
    }
  })


  .state('itemDetail', {
    url: '/item-detail/{itemId}',
    templateUrl: 'src/shoppinglist/templates/main-itemdetail.template.html',
    controller: 'ItemDetailController as itemDetail',
     resolve: {
      item: ['$stateParams', 'ShoppingListService',
            function ($stateParams, ShoppingListService) {
              return ShoppingListService.getAllCategories()
                .then(function (items) {
                  console.log($stateParams);
                //  console.log(items[$stateParams.short_name]);
                  console.log($stateParams.itemId);
                  console.log(items[$stateParams.itemId]);
                  var short_name = items[$stateParams.itemId].short_name;
                  console.log(short_name);
                  console.log(ShoppingListService.getMenuForCategory(short_name));
                return ShoppingListService.getMenuForCategory(short_name);
                });
            }]
    }
  });

}

})();
