'use strict';

angular.module('autoJekyll', ['ngAnimate', 'ngSanitize', 'restangular', 'ui.router', 'ui.bootstrap', 'yaru22.md'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl as app'
      });

    $urlRouterProvider.otherwise('/');
  })
;
