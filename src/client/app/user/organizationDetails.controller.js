/**
 * Created by jayshil on 17/3/16.
 */
/**
 * Created by jayshil on 17/3/16.
 */



(function() {
    'use strict';

    angular
        .module('MeanApp')
        .controller('organizationDetailsController', OrgDetailsCtrl);

    OrgDetailsCtrl.$inject = ['$scope', 'Auth', '$state', '$window','$cookieStore','$rootScope','$stateParams'];

    function OrgDetailsCtrl($scope, Auth, $state, $window,$cookies,$rootScope,$stateParams) {
        //$scope.people = {};
        //$scope.peoples = [];


        $scope.data = [];

        console.log('this is stateParams'+$stateParams.id);
        Auth.getOrganization($stateParams.id,function(err,data){
            if(err)
            {

                console.log(err+ "err n data "  +data);
                alert('Invalid Username or Password');
            }
            else {
                $scope.organization = data.data;
                console.log(" data "  ,data);
                console.log('this is user to update',$scope.organization);
                $scope.org=data.data;
                //  $state.go('userdetail')
            }

        });


    }


})();