(function() {
    'use strict';
   // var app=angular.module('MeanApp', ['$scope', 'Auth', '$state', '$window','$cookieStore','$rootScope']);
    angular
        .module('MeanApp')
        .controller('NewController', NewCtrl).filter('startFrom',startFrom);

    NewCtrl.$inject = ['$scope', 'Auth', '$state', '$window','$cookieStore','$rootScope'];

    function NewCtrl($scope, Auth, $state, $window,$cookies,$rootScope) {
    $scope.currentPage = 0;
    $scope.pageSize = 100;
    $scope.data = [];
    $scope.numberOfPages=function(){
        return Math.ceil($scope.data.length/$scope.pageSize);
    };
    for (var i=0; i<45; i++) {
        $scope.data.push("Item "+i);
    }
}

//We already have a limitTo filter built-in to angular,
//let's make a startFrom filter
function startFrom() {
    return function (input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
}
})();
