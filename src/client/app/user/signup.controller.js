(function() {
    'use strict';

    angular
        .module('MeanApp')
        .controller('SignUpController', SignUpCtrl);

    SignUpCtrl.$inject = ['$scope', 'Auth', '$state'];

    function SignUpCtrl($scope, Auth, $state) {

        $scope.user = {};
        $scope.errors = {};

        $scope.signup = function(form) {
            $scope.submitted = true;

            if (form.$valid) {
                Auth.signup(
                        $scope.user
                    )
                    .then(function() {
                        // Logged in, redirect to home
                        $state.go('app.login');
                    })
                    .catch(function(err) {
                        $scope.errors.other = err.message;
                    });
            }
        };
    }

})();