(function() {
	'use strict';

	angular
		.module('MeanApp')
		.controller('PeopleDataController', PeopleDataCtrl);

	PeopleDataCtrl.$inject = ['$scope', 'Auth', '$state', '$window','$cookieStore','$rootScope','cfpLoadingBar', '$stateParams'];

	function PeopleDataCtrl($scope, Auth, $state,cfpLoadingBar, $window,$cookies,$rootScope, $stateParams){
		//$scope.organization = {};
		//$scope.organizations = [];
		$scope.data = [];
		console.log('params id ' +$stateParams.id);
		Auth.getppl($stateParams.id, function(err, data){
			if(err){
				console.log(JSON.stringify(err) + "err n data " + data);
				alert('Invalid Username or Password');
			}
			else{
				console.log(" data ", data);
				console.log('success');
				$scope.ppl = data.data;


			}
		});
	};
})();