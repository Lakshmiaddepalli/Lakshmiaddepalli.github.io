(function () {
'use strict';

angular.module('ShoppingList')
.component('itemshoppingList', {
  templateUrl: 'src/shoppinglist/templates/item-detail.template.html',
  bindings: {
    items: '<'
  }
});

})();
