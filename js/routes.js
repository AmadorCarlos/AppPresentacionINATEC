angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('DesarolloDeAplicacionesMViles', {
    url: '/page1',
    templateUrl: 'templates/DesarolloDeAplicacionesMViles.html',
    controller: 'DesarolloDeAplicacionesMVilesCtrl'
  })

  .state('QueEsUnaApp', {
    url: '/page2',
    templateUrl: 'templates/QueEsUnaApp.html',
    controller: 'QueEsUnaAppCtrl'
  })

  .state('QueEsElDesarrolloDeApps', {
    url: '/page3',
    templateUrl: 'templates/QueEsElDesarrolloDeApps.html',
    controller: 'QueEsElDesarrolloDeAppsCtrl'
  })

  .state('formasDeHacerUnaApp', {
    url: '/page4',
    templateUrl: 'templates/formasDeHacerUnaApp.html',
    controller: 'formasDeHacerUnaAppCtrl'
  })

  .state('aplicacionesNativas', {
    url: '/page5',
    templateUrl: 'templates/aplicacionesNativas.html',
    controller: 'aplicacionesNativasCtrl'
  })

  .state('aplicacionesHBridas', {
    url: '/page6',
    templateUrl: 'templates/aplicacionesHBridas.html',
    controller: 'aplicacionesHBridasCtrl'
  })

  .state('frameworks', {
    url: '/page7',
    templateUrl: 'templates/frameworks.html',
    controller: 'frameworksCtrl'
  })

  .state('MuchasGracias', {
    url: '/page8',
    templateUrl: 'templates/MuchasGracias.html',
    controller: 'MuchasGraciasCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});