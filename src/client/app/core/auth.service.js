(function() {
  'use strict';

  angular
    .module('MeanApp')
    .factory('Auth', Auth);

  Auth.$inject = ['$location', '$rootScope', '$http', '$q'];

  function Auth($location, $rootScope, $http, $q) {

      var authService = {
          getPeopleByName: getPeopleByName,
          getOrganizationByName:getOrganizationByName
      };

      return authService;
      /**
       * Authenticate user and
       */

      function getPeopleByName(name, callback) {
          var path = '/users/login';
          $http.post(path, name).success(function (data) {
              callback(undefined, data);

          }).error(function (error, status) {

              callback(error, status);
          });
      }

      function getOrganizationByName(location, callback) {
          var path = '/users/login';
          $http.post(path, location).success(function (data) {
              callback(undefined, data);

          }).error(function (error, status) {

              callback(error, status);
          });
      }


  }
})();