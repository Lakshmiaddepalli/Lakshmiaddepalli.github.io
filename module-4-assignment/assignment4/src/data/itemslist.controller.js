(function () {
'use strict';

angular.module('Data')
.controller('ItemsListController', ItemsListController);


ItemsListController.$inject = ['MenuDataService', 'item'];
function ItemsListController(MenuDataService, item) {
  var itemsList = this;
  console.log("pakistan" + item);
  itemsList.items = item;
  console.log("*1*1*1*1*1*1*1*1" + itemsList.items);
 // itemDetail.shortname = item.short_name;
 // itemDetail.name = item.name;
//  itemDetail.description = item.description;
//  itemDetail.pricesmall = item.price_small;
}

})();
