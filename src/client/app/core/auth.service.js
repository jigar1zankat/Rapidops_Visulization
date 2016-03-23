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
          getOrganizationByName:getOrganizationByName,
          getPerson:getPerson,
          getOrganization:getOrganization,
          getPeopleByTitle:getPeopleByTitle,
          getPeopleByAll:getPeopleByAll,
          getOrganizationByAll:getOrganizationByAll

      };

      return authService;
      /**
       * Authenticate user and
       */


      function getOrganizationByLocation(location,page, callback) {
          var path = '/users/organization_city';
          $http.get(path +"?city="+location+"&page="+page).success(function (data) {
              callback(undefined, data);

          }).error(function (error, status) {

              callback(error, status);
          });
      }

      function getPerson(id,callback){
          var path='/users/ppl';
          $http.get(path+'/'+id).success(function (data) {
              callback(undefined, data);

          }).error(function (error, status) {

              callback(error, status);
          });

      }

      function getOrganization (id,callback){
          var path='/users/org';
          $http.get(path+'/'+id).success(function (data) {
              callback(undefined, data);

          }).error(function (error, status) {

              callback(error, status);
          });

      }


      function getPeopleByLocation(location,page,callback) {
          var path = '/users/people_city';
          $http.get(path +"?city="+location+"&page="+page).success(function (data) {
              callback(undefined, data);

          }).error(function (error, status) {

              callback(error, status);
          });
      }



      function getPeopleByName(name,page,callback) {
          var path = '/users/people';
          $http.get(path +"?name="+name+"&page="+page).success(function (data) {
              callback(undefined, data);

          }).error(function (error, status) {

              callback(error, status);
          });
      }

      function getPeopleByTitle(title,page, callback) {
          var path = '/users/people_title';
          $http.get(path +"?title="+title+"&page="+page).success(function (data) {
              callback(undefined, data);

          }).error(function (error, status) {

              callback(error, status);
          });
      }

      function getOrganizationByName(name,page, callback) {
          var path = '/users/organization';
          $http.get(path +"?name="+name+"&page="+page).success(function (data) {
              callback(undefined, data);

          }).error(function (error, status) {


              callback(error, status);
          });
      }
      function getPeopleByAll(alls, callback) {
          var path = '/users/all';
          $http.post(path,alls).success(function (data) {

              callback(undefined, data);

          }).error(function (error, status) {

              callback(error, status);
          });
      }
      function getOrganizationByAll(alls, callback) {
          var path = '/users/allorg';
          $http.post(path,alls).success(function (data) {

              callback(undefined, data);

          }).error(function (error, status) {

              callback(error, status);
          });
      }


  }
})();