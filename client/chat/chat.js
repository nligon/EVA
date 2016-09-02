angular.module('Eva.chat', [])

.controller('chatCtrl', function($scope, $http) {
  $scope.display = '';

  $scope.$watch('search', function() {
    // fetch();
    // $scope.go();
  });
  
  $scope.go = function() {
    var message = $scope.search;
    $scope.search = '';
    
    $http.post('/', {
      'query': message,
      'lang': 'en'
    })
       
    .then(function(response) {
      console.log('response:', response);
      $scope.details = 'Eva: ' + response.data.result.speech
      responsiveVoice.speak(response.data.result.speech, "UK English Female", {volume: 1, rate: 0.9});
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
