(function () {
'use strict';

angular.module('ShoppingList')
.controller('ItemDetailController', ItemDetailController);


ItemDetailController.$inject = ['ShoppingListService', 'item'];
function ItemDetailController(ShoppingListService, item) {
  var itemDetail = this;
  itemDetail.item = item;
  console.log("*1*1*1*1*1*1*1*1" + itemDetail.item);
 // itemDetail.shortname = item.short_name;
 // itemDetail.name = item.name;
//  itemDetail.description = item.description;
//  itemDetail.pricesmall = item.price_small;
}

})();
