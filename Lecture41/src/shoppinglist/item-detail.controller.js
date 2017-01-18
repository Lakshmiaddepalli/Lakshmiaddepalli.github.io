(function () {
'use strict';

angular.module('ShoppingList')
.controller('ItemDetailController', ItemDetailController);


ItemDetailController.$inject = ['ShoppingListService','$stateParams', 'items'];
function ItemDetailController('ShoppingListService',$stateParams, items) {
  var itemDetail = this;
  var item = items[$stateParams.itemId];
  itemDetail.shortname = item.short_name;
  itemDetail.name = item.name;
  itemDetail.description = item.description;
  itemDetail.pricesmall = item.pricesmall;
}

})();
