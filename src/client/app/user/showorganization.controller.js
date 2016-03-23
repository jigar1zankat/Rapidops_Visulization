(function() {
    'use strict';

    angular
        .module('MeanApp')
        .controller('ShowOrganizationController', ShowOrganizationCtrl).filter('startFrom',startFrom);

    ShowOrganizationCtrl.$inject = ['$scope', 'Auth', '$state', '$window','$cookieStore','$rootScope'];



    function ShowOrganizationCtrl($scope, Auth, $state, $window,$cookies,$rootScope) {

        $scope.keyNameSearch = function($event){
        var keyCode = $event.which || $event.keyCode;
            if (keyCode === 13){
                //$scope.org_name();
                $scope.allOrg($scope.currentPage);

            }
        }
        $scope.keyLocSearch = function($event){
            var keyCode = $event.which || $event.keyCode;
            if (keyCode === 13){

                $scope.allOrg($scope.currentPage);

            }
        }

        $scope.organization = {};
        $scope.organizations = [];

        $scope.currentPage = 0;
        $scope.pageSize = 100;
        $scope.data = [];
        $scope.numberOfPages=function(){
            return Math.ceil($scope.counter/$scope.pageSize);
        };


        $scope.org_location = function(page) {

            if(page>=0)
            {
                $scope.currentPage=page
            } else {
                //console.log("error");
            }
            console.log("current page", $scope.currentPage);
            $scope.search_value = "location";

           // console.log("user",$scope.user);
          //  $scope.submitted = true;

           // if (form.$valid) {
                Auth.getOrganizationByLocation($scope.location,page,function(err,data){
                    if(err)
                    {
                        console.log(err+ "err n data "  +data);
                        alert('Invalid Username or Password');
                    }
                    else if(!$scope.organization==data.data){
                        //alert("Data Not Found");
                        $scope.dataFromDatabase=true;

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
            if(page>=0){$scope.currentPage=page}
            else
            {
                //console.log("error in page")
            }
            $scope.search_value = "name";

            Auth.getOrganizationByName($scope.name,page,function(err,data){
                if(err)
                {
                    console.log(err+ "err n data "  +data);
                    alert('Invalid Username or Password');
                }
                else if(!$scope.organization==data.data) {
                    //alert("Data Not Found");
                    $scope.dataFromDatabase=true;
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




        $scope.allOrg = function(page) {
            if(!$scope.name && !$scope.location)
            {
                alert("Please enter search criteria in textbox");
            }
            else{
                var all={
                    name:$scope.name,
                    location:$scope.location,
                    page:page
                }
                if(page>=0){$scope.currentPage=page}else{ console.log("error in page")}

                console.log("current page",$scope.currentPage);
                $scope.search_value = "location";

                Auth.getOrganizationByAll(all,function(err,data){
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

                });}
            // }
        };
        //
        //for (var i=0; i<20000; i++) {
        //    $scope.data.push("Item "+i);
        //}
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