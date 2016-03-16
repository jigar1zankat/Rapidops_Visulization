(function() {
    'use strict';

    angular
        .module('MeanApp')
        .controller('ShowPeopleController', ShowPeopleCtrl).filter('startFrom',startFrom);

    ShowPeopleCtrl.$inject = ['$scope', 'Auth', '$state', '$window','$cookieStore','$rootScope'];

    function ShowPeopleCtrl($scope, Auth, $state, $window,$cookies,$rootScope) {
        $scope.people = {};
        $scope.peoples = [];
        $scope.currentPage = 0;
        $scope.pageSize = 100;
        $scope.data = [];
        $scope.numberOfPages=function(){
            return Math.ceil($scope.peoples.length/$scope.pageSize);
        };


        $scope.people_name = function(name,page) {

           // console.log("user",$scope.user);
           // $scope.submitted = true;

          //  if (form.$valid) {
                Auth.getPeopleByName(name,page,function(err,data){
                    if(err)
                    {
                        console.log(err+ "err n data "  +data);
                        alert('Invalid Username or Password');
                    }
                    else {
                        console.log(" data "  ,data);
                        console.log('success');
                        $scope.people=data.data;
                        $scope.peoples=data.data;
                        console.log("array of people by name",$scope.people);
                        $state.go('app.showpeople');


                    }

                });
            };


        $scope.people_location = function(location,page) {

            // console.log("user",$scope.user);
            // $scope.submitted = true;

            //  if (form.$valid) {
            Auth.getPeopleByLocation(location,page,function(err,data){
                if(err)
                {
                    console.log(err+ "err n data "  +data);
                    alert('Invalid Username or Password');
                }
                else {
                    console.log(" data "  ,data);
                    console.log('success');
                    $scope.people=data.data;
                    $scope.peoples=data.data;
                    $state.go('app.showpeople');


                }

            });
        };

    }
    function startFrom() {
        return function (input, start) {
            start = +start; //parse to int
            return input.slice(start);
        }
    }
})();