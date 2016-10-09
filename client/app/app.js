angular.module('rbk-offline', [
  'rbk-offline.info',
  'rbk-offline.mindset',
  'rbk-offline.english',
  'rbk-offline.analytic',
  'rbk-offline.services',
  'ngRoute'
])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/start', {
      templateUrl: 'app/assets/start.html'
    })
    .when('/english', {
      templateUrl: 'app/english/english.html',
      controller: 'EnglishController'
    })
    .when('/mindset', {
      templateUrl: 'app/mindset/mindset.html',
      controller: 'MindsetController'
    })
    .when('/info', {
      templateUrl: 'app/info/info.html',
      controller: 'InfoController'
    })
    .when('/analytic', {
      templateUrl: 'app/analytic/analytic.html',
      controller: 'AnalyticController'
    })
    .when('/submit', {
      templateUrl: 'app/assets/submit.html'
    })
    .otherwise('/start')
})
