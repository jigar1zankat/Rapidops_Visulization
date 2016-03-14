(function() {
    'use strict';

    angular
        .module('MeanApp')
        .controller('UpdateController', UpdateCtrl);

    UpdateCtrl.$inject = ['$stateParams', '$scope', 'Auth', '$state'];

    function UpdateCtrl($stateParams, $scope, Auth, $state) {

        $scope.user = {};
        $scope.all={};
        console.log("id in stateparams",$stateParams.id);


        Auth.singleUSer($stateParams.id,function(err,data){
            if(err)
            {

                console.log(err+ "err n data "  +data);
                alert('Invalid Username or Password');
            }
            else {
                $scope.user = data.data;
                console.log(" data "  ,data);
                console.log('this is user to update',$scope.user);
                //$scope.alluser=data.data;
                //  $state.go('userdetail')
            }

        });

        $scope.update = function(form) {

            console.log("in update of second",form);

            $scope.submitted = true;

            if (form.$valid) {
                Auth.update(
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