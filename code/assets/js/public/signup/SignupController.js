angular.module('SignupModule').controller('SignupController', ['$scope', '$http', function($scope, $http){
  $scope.submitSignupForm = function() {
    $scope.signupForm.loading = true;
    console.log("clicked!");

    $http.post('/signup', {
        name: $scope.signupForm.name,
        title: $scope.signuoForm.title,
        email: $scope.signupForm.email,
        password: $scope.signupForm.password
    }).then(function onSuccess(){
        window.location = '/user';
    }).catch(function onError(sailsResponse){
        console.log(sailsResponse);
    }).finally(function eitherWay(){
        $scope.signupForm.location = false
    })
  }
}]);
