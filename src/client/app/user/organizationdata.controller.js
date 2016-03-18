(function() {
	'use strict';

	angular
		.module('MeanApp')
		.controller('OrganizationDataController', OrganizationDataCtrl);

	OrganizationDataCtrl.$inject = ['$scope', 'Auth', '$state', '$window','$cookieStore','$rootScope','cfpLoadingBar', '$stateParams'];

	function OrganizationDataCtrl($scope, Auth, $state,cfpLoadingBar, $window,$cookies,$rootScope,$stateParams){
		$scope.organization = {};
		$scope.organizations = [];
		$scope.data = [];

		Auth.getorg($stateParams.id, function(err, data){
			if(err){
				console.log(JSON.stringify(err) + "err n data " + data);
				alert('Invalid Username or Password');
			}
			else{
				console.log(" data ", data);
				console.log('success');
				$scope.org = data.data;

				//$state.go('userdetail');
			}
		});
	};
})();