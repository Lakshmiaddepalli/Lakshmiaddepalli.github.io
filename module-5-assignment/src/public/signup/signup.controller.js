(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService) {
  var signup = this;
 
   signup.submit = function () {
     signup.completed = true;
     var value = signup.user.menunumber;
     console.log(value);
     signup.answer = MenuService.getMenuItem(value).then(function(response) {
     signup.text =  "Your information has been saved";
    // console.log(response);
     console.log(signup.text);
     return response;
     }, function(error) {
     console.log("Error");
     signup.text = "No such menu number exists";
    // console.log(signup.text);
     });

console.log(answer);

 };

}


})();
