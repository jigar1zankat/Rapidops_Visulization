(function() {
    'use strict';

    angular
        .module('MeanApp')
        .controller('ShowOrganizationController', ShowOrganizationCtrl).filter('startFrom',startFrom);

    ShowOrganizationCtrl.$inject = ['$scope', 'Auth', '$state', '$window','$cookieStore','$rootScope','cfpLoadingBar'];

    function ShowOrganizationCtrl($scope, Auth, $state,cfpLoadingBar, $window,$cookies,$rootScope) {



        $scope.organization = {};
        $scope.organizations = [];
        $scope.currentPage = 0;
        $scope.pageSize = 100;
        $scope.data = [];

        $scope.numberOfPages=function(){
            return Math.ceil($scope.counter/$scope.pageSize);
        };

        $scope.org_location = function(page) {
            if(page>=0){$scope.currentPage=page}else{ console.log("error in page")}

            console.log("current page",$scope.currentPage);
            $scope.search_value = "location";

                Auth.getOrganizationByLocation($scope.location,page,function(err,data){
                    if(err)
                    {
                        console.log(err+ "err n data "  +data);
                        alert('Invalid Username or Password');
                    }
                    else {
                        console.log(" data "  ,data);
                        console.log('success');
                        $scope.counter=data.count;
                        $scope.organization=data.data;
                        $scope.organizations=data.data;
                        $state.go('app.showorganization');

                    }

                });
           // }
        };

        $scope.org_name = function(page) {
            if(page>=0){$scope.currentPage=page}else{ console.log("error in page")}
            $scope.search_value = "name";

            Auth.getOrganizationByName($scope.name,page,function(err,data){
                if(err)
                {
                    console.log(err+ "err n data "  +data);
                    alert('Invalid Username or Password');
                }
                else {
                    console.log(" data "  ,data);
                    console.log('success');
                    $scope.counter=data.count;
                    $scope.organization=data.data;
                    $scope.organizations=data.data;
                    $state.go('app.showorganization');


                }

            });
            // }
        };
        $scope.identifire=function(page) {
            if($scope.search_value=="location"){
                console.log("page in identifire",page);
                $scope.org_location(page);

            }
            else{
                $scope.org_name(page);

            }
        };

    }
    function startFrom() {
        return function (input, start) {
            start = +start; //parse to int
            return input.slice(start);
        }
    }

})();