// Movie Controller
angular.module('talkie.view1', [])

.controller('view1Ctrl', function($scope, $http) {
  // $scope.display = 'First view, here.';

  $scope.$watch('search', function() {
    // fetch();
    // $scope.go();
  });
  
  $scope.go = function() {
    console.log('go called');
    fetch();
  }
  

  function fetch() {
    console.log('fetch called. $scope.search:', $scope.search);
    $http.get("http://www.omdbapi.com/?t=" + $scope.search + "&tomatoes=true&plot=full")
      .then(function(response) {
        $scope.details = response.data;
        console.log('response:', response.data);
      });
  }

  $scope.select = function() {
    this.setSelectionRange(0, this.value.length);
  }

})
