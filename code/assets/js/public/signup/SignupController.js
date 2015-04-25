angular.module('SignupModule').controller('SignupController', ['$scope', '$http', function($scope, $http){
  $scope.submitSignupForm = function() {
    $scope.signupForm.loading = true;
    console.log("clicked!");

    $http.post('/signup', {
        name: $scope.signupForm.name,
        title: $scope.signupForm.title,
        email: $scope.signupForm.email,
        password: $scope.signupForm.password
    }).then(function onSuccess(){
        window.location = '/user';
    }).catch(function onError(sailsResponse){
        if(sailsResponse.status == 409) {
            toaster.error('That email address has already been taken, please try again.', 'Error');
            return;
        }
        else { console.log(sailsResponse) }
    }).finally(function eitherWay(){
        $scope.signupForm.loading = false
    })
  }
}]);
