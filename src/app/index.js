'use strict';

angular.module('autoJekyll', ['ngAnimate', 'ngSanitize', 'restangular', 'ui.router', 'ui.bootstrap', 'yaru22.md', 'base64'])
  .config(function ($stateProvider, $urlRouterProvider, RestangularProvider) {
    
    RestangularProvider.setBaseUrl('https://api.github.com/repos/loganarnett/LoganArnett.github.io/contents/');
    
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl as app'
      })
      .state('newpost', {
        url: '/new',
        templateUrl: 'app/newpost/newpost.html',
        controller: 'MainCtrl as app'
      });
    

    $urlRouterProvider.otherwise('/');
  })
;


// 6c5e78e3ac7a7571b0f1f32d07034a97434b8b88