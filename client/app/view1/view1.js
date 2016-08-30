// Movie Controller
angular.module('talkie.view1', [])

.controller('view1Ctrl', function($scope, $http) {
  $scope.display = '';

  $scope.$watch('search', function() {
    // fetch();
    // $scope.go();
  });

  $scope.go = function() {
    console.log('go called');
    // fetch();
    // console.log('text:', $scope.search);
    send($scope.search);
  }

  function send(myText) {
    console.log('send called.');
    $http.post('https://api.api.ai/v1/query', {
      'query': myText,
      'lang': 'en'
    }).then(function(response) {
      console.log('response:', response);
      $scope.details = response.data.result.speech
    }, function(error) {
      console.log('error:', error);
    });
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
