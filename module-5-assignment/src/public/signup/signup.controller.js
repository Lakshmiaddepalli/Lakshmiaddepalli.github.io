(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService) {
  var signup = this;
  
   signup.submit = function () {
    signup.completed = true;
  //  signup.values = item;
  
  };

 // console.log(signup.user.menunumber);
}


})();
