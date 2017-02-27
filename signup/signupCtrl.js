angular.module('networkingApp')
    .controller('signupCtrl', function($scope, userServ){

      // $scope.createUser = function(firstName, lastName, age, gender, city, state, username, password){
      //   userServ.createUser(firstName, lastName, age, gender, city, state, username, password);
      // }

      
      $scope.createUser = function(firstName, lastName, age, gender, city, state, username, password){
        userServ.createUser(firstName, lastName, age, gender, city, state, username, password);
      }

    })
