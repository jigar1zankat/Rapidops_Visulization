(function() {
    'use strict';

    angular
        .module('MeanApp')
        .controller('LoginController', LoginCtrl);

    LoginCtrl.$inject = ['$scope', 'Auth', '$state', '$window','$cookieStore','$rootScope'];

    function LoginCtrl($scope, Auth, $state, $window,$cookies,$rootScope) {

        $scope.user = {};

        $scope.login = function(form) {

            console.log("user",$scope.user);
            $scope.submitted = true;

            if (form.$valid) {
                Auth.login($scope.user,function(err,data){
                    if(err)
                    {
                        console.log(err+ "err n data "  +data);
                        alert('Invalid Username or Password');
                    }
                    else {
                        console.log(" data "  ,data);
                        console.log('success');
                        $state.go('app.users.userdetail');
                        $cookies.put('user',(data.data));
                        $rootScope.userjson=data.data;

                    }

                });
            }
        };
    }

})();