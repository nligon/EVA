angular.module('talkie', [
  'talkie.view1',
  'talkie.view2',
  'ngRoute'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'view1Ctrl'
      })
      .when('/view2', {
        templateUrl: 'view2/view2.html',
        controller: 'view2Ctrl'
      })
      .otherwise({
        redirectTo: '/view1'
      });
  })