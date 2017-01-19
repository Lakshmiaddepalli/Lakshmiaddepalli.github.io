(function () {
'use strict';

angular.module('ShoppingList')
.component('itemDetail', {
  templateUrl: 'src/shoppinglist/templates/itemdetail.template.html',
  bindings: {
    items: '<'
  }
});

})();
