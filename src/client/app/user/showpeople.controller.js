(function() {
    'use strict';

    angular
        .module('MeanApp')
        .controller('ShowPeopleController', ShowPeopleCtrl).filter('startFrom',startFrom);

    ShowPeopleCtrl.$inject = ['$scope', 'Auth', '$state', '$window','$cookieStore','$rootScope'];

    function ShowPeopleCtrl($scope, Auth, $state, $window,$cookies,$rootScope) {

        $scope.keyNameSearch = function($event){
            var keyCode = $event.which || $event.keyCode;
            if (keyCode === 13){
                $scope.allfield(0);



            }
        };
        $scope.keyLocSearch = function($event){
            var keyCode = $event.which || $event.keyCode;
            if (keyCode === 13){

                $scope.allfield(0);

            }
        };
        $scope.keyTitleSearch = function($event){
            var keyCode = $event.which || $event.keyCode;
            if (keyCode === 13){

                $scope.allfield(0);

            }
        };

        $scope.people = {};
        $scope.dataFromDatabase=false;
        $scope.peoples = [];
        $scope.currentPage = 0;
        $scope.pageSize = 100;
        $scope.data = [];
        $scope.numberOfPages=function(){
            return Math.ceil($scope.counter/$scope.pageSize);
        };

        $scope.people_name = function(page) {

            if(page>=0)
            {
                $scope.currentPage=page
            }else {
                console.log("error in page")
            }
            $scope.search_value = "name";



                Auth.getPeopleByName($scope.name,page,function(err,data){
                    if(err)
                    {
                        console.log(err+ "err n data "  +data);
                        alert('Invalid Username or Password');
                    }
                    else if (!$scope.people==data.data) {

                        $scope.dataFromDatabase=true;
                        //$state.go("app.showpeople");
                    }
                    else {
                        console.log(" data "  ,data);
                        console.log('success');
                        $scope.counter=data.count;
                        $scope.people=data.data;
                        $scope.peoples=data.data;
                        console.log("array of people by name",$scope.people);
                        $state.go('app.showpeople');


                    }

                });

        };

        $scope.people_title = function(page) {
            // alert(page);
            if(page>=0){$scope.currentPage=page}else{ console.log("error in page")}
            // console.log("user",$scope.user);
            // $scope.submitted = true;
            $scope.search_value = "title";
            //  if (form.$valid) {
            Auth.getPeopleByTitle($scope.title,page,function(err,data){
                if(err)
                {
                    console.log(err+ "err n data "  +data);
                    alert('Invalid Username or Password');
                }
                else {
                    console.log(" data "  ,data);
                    console.log('success');
                    $scope.counter=data.count;
                    $scope.people=data.data;
                    $scope.peoples=data.data;
                    console.log("array of people by title",$scope.people);
                    $state.go('app.showpeople');


                }

            });
        };




        $scope.people_location = function(page) {

            if(page>=0)
            {
                $scope.currentPage=page;
            } else {
                //console.log("error in page");
            }
            // console.log("user",$scope.user);
            // $scope.submitted = true;
            $scope.search_value = "location";
            //  if (form.$valid) {
            Auth.getPeopleByLocation($scope.location,page,function(err,data){
                if(err)
                {
                    console.log(err+ "err n data "  +data);
                    alert('Invalid Username or Password');
                }
                else if (!$scope.people==data.data) {
                    //alert("Data Not Found");
                    $scope.dataFromDatabase=true;
                }
                else {
                    console.log(" data "  ,data);
                    console.log('success');
                    $scope.counter=data.count;
                    $scope.people=data.data;
                    $scope.peoples=data.data;
                    $state.go('app.showpeople');


                }

            });

        };

        $scope.allfield = function(pagenmbr) {

            if(!$scope.name && !$scope.location && !$scope.title){
                alert("Please enter search criteria in textbox");
            } else {
                var all={
                    name:$scope.name,
                    location:$scope.location,
                    title:$scope.title,
                    page:pagenmbr

                };
            }
            if(pagenmbr>=0){$scope.currentPage=pagenmbr}else{ console.log("error in page")}
            $scope.search_value = "all";

            Auth.getPeopleByAll(all,function(err,data){
                if(err)
                {
                    console.log(JSON.stringify(err)+ "err n data "  +data);
                    alert('Invalid Username or Password');
                }

                else {
                    console.log(" data "  ,data);
                    console.log('success');
                    $scope.counter=data.count;
                    $scope.people=data.data;
                    $scope.peoples=data.data;
                    console.log("array of people by title",$scope.people);
                    $state.go('app.showpeople');


                }

            });
        };
        $scope.identifire=function(page) {
            if($scope.search_value=="location"){
                console.log("page in identifire",page);
                $scope.people_location(page);

            }
            else{
                $scope.people_name(page);

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