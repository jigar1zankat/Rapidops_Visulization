(function() {
  'use strict';

  angular
    .module('MeanApp')
    .factory('Auth', Auth);

  Auth.$inject = ['$location', '$rootScope', '$http', '$q'];

  function Auth($location, $rootScope, $http, $q) {

      var authService = {
          getPeopleByLocation:getPeopleByLocation,
          getOrganizationByLocation:getOrganizationByLocation,
          getPeopleByName: getPeopleByName,
          getOrganizationByName:getOrganizationByName
      };

      return authService;
      /**
       * Authenticate user and
       */


      function getOrganizationByLocation(location,page, callback) {
          var path = '/users/organization_city';
          $http.get(path +"?city="+location+"&page="+page).success(function (data) {
             // $scope.complete();
              callback(undefined, data);

          }).error(function (error, status) {

              callback(error, status);
          });
      }



      function getPeopleByLocation(location,page,callback) {
          var path = '/users/people_city';
          $http.get(path +"?city="+location+"&page="+page).success(function (data) {
              $scope.complete();
              callback(undefined, data);

          }).error(function (error, status) {

              callback(error, status);
          });
      }



      function getPeopleByName(name,page,callback) {
          var path = '/users/people';
          $http.get(path +"?name="+name+"&page="+page).success(function (data) {
            //  $scope.complete();
              callback(undefined, data);

          }).error(function (error, status) {

              callback(error, status);
          });
      }

      function getOrganizationByName(name,page, callback) {
          var path = '/users/organization';
          $http.get(path +"?name="+name+"&page="+page).success(function (data) {
             // $scope.complete();
              callback(undefined, data);

          }).error(function (error, status) {

              callback(error, status);
          });
      }


  }
})();