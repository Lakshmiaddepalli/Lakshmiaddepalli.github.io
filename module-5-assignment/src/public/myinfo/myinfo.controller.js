(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MenuService'];
function MyInfoController(MenuService) {
  var myinfo = this;

  if(MenuService.menuitemvalues === undefined || MenuService.menuitemvalues.length == 0)
  {
        myinfo.text = "Not Signed Up Yet. Sign up Now!";
        myinfo.test = true;
 }
 else
 {

     myinfo.shortname= MenuService.menuitemvalues.short_name;
     myinfo.name=MenuService.menuitemvalues.name;
     myinfo.image = "https://angularjslaksh.herokuapp.com/images/" + myinfo.shortname + ".jpg";
     myinfo.description= MenuService.menuitemvalues.description;
     myinfo.pricesmall= MenuService.menuitemvalues.price_small;
     myinfo.pricelarge= MenuService.menuitemvalues.price_large;
     myinfo.smallportionname= MenuService.menuitemvalues.small_portion_name;
     myinfo.largeportionname= MenuService.menuitemvalues.large_portion_name;
     myinfo.test1 = true;
     MenuService.menuitemvalues = [];
}

}


})();
