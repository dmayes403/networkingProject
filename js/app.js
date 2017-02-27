angular.module('networkingApp', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
      $stateProvider
          .state('login',{
            url:'/login',
            templateUrl: '../login/login.html',
            controller: 'loginCtrl'
          })
          .state('logout',{
            url:'/',
            // templateUrl: 'index.html',
          })
          .state('signup',{
            url:'/signup',
            templateUrl: '../signup/signup.html',
            controller: 'signupCtrl'
          })
          .state('landing',{
            url:'/landing/:id',
            templateUrl: '../landing/landing.html',
            controller: 'landingCtrl'
          });

      $urlRouterProvider
          .otherwise('/');
    });
