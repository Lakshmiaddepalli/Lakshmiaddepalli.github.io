(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService) {
  var $ctrl = this;
  
 // $ctrl.user.firstname = '';
 // $ctrl.user.lastname = '';
 // $ctrl.user.email = '';
 // $ctrl.user.phone ='';
  //$ctrl.user.menunumber = '';
  
  
   $ctrl.submit = function () {
     $ctrl.completed = true;
    // console.log($ctrl.user);
 // console.log($ctrl.user.menunumber);
     var value = $ctrl.user.menunumber;
     console.log(value);
     var answer = MenuService.getMenuItem(value);
     console.log(answer);
  //   var answer1 = MenuService.saveMenuItem(answer);
  //   console.log(answer1);
  // signup.values = item;
  
  };

//console.log($ctrl.user);
//  console.log($ctrl.user.menunumber);
 // console.log(signup.values);
}


})();
