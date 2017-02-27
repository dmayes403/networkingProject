angular.module('networkingApp')
    .controller('loginCtrl', function($scope, userServ){
        $scope.checkCredentials = function(user, pass){
          return userServ.checkCredentials(user, pass);
        }
    })
