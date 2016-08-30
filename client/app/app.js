angular.module('talkie', [
    'talkie.view1',
    'talkie.view2',
    'ngRoute'
  ])
  .config(function($routeProvider, $httpProvider) {
    $httpProvider.defaults.headers.post = { 
      'Authorization': 'Bearer ' + 'e0449f3c12754d25b7c9fd67a589f7b9',
      'Content-Type': 'application/json;charset=utf-8'
     };

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
