(function() {
    'use strict';

    angular
        .module('MeanApp')
        .controller('ShowOrganizationController', ShowOrganizationCtrl).filter('startFrom',startFrom);

    ShowOrganizationCtrl.$inject = ['$scope', 'Auth', '$state', '$window','$cookieStore','$rootScope'];

    function ShowOrganizationCtrl($scope, Auth, $state, $window,$cookies,$rootScope) {

        $scope.organization = {};
        $scope.organizations = [];

        $scope.currentPage = 0;
        $scope.pageSize = 100;
        $scope.data = [];
        $scope.numberOfPages=function(){
            return Math.ceil($scope.organizations.length/$scope.pageSize);
        };







        $scope.org_location = function(location,page) {

           // console.log("user",$scope.user);
          //  $scope.submitted = true;

           // if (form.$valid) {
                Auth.getOrganizationByLocation(location,page,function(err,data){
                    if(err)
                    {
                        console.log(err+ "err n data "  +data);
                        alert('Invalid Username or Password');
                    }
                    else {
                        console.log(" data "  ,data);
                        console.log('success');
                        $scope.organization=data.data;
                        $scope.organizations=data.data;
                        $state.go('app.showorganization');

                    }

                });
           // }
        };

        $scope.org_name = function(name,page) {

            // console.log("user",$scope.user);
            //  $scope.submitted = true;

            // if (form.$valid) {
            Auth.getOrganizationByName(name,page,function(err,data){
                if(err)
                {
                    console.log(err+ "err n data "  +data);
                    alert('Invalid Username or Password');
                }
                else {
                    console.log(" data "  ,data);
                    console.log('success');
                    $scope.organization=data.data;
                    $scope.organizations=data.data;
                    $state.go('app.showorganization');


                }

            });
            // }
        };
        //
        //for (var i=0; i<20000; i++) {
        //    $scope.data.push("Item "+i);
        //}


    }
    function startFrom() {
        return function (input, start) {
            start = +start; //parse to int
            return input.slice(start);
        }
    }

})();