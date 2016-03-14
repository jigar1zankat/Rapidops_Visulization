(function() {
  'use strict';

  angular
    .module('MeanApp')
    .factory('Auth', Auth);

  Auth.$inject = ['$location', '$rootScope', '$http', '$q'];

  function Auth($location, $rootScope, $http, $q) {
   
     var authService = {
            login: login,
         signup:signup,
         getall:getall,
         remove:remove,
         update:update,
         singleUSer:singleUSer
        };

    return authService;
      /**
       * Authenticate user and 
       */

    function login(loginData, callback) {
         var path = '/users/login';
          $http.post(path, loginData).success(function(data){
              callback(undefined, data);

          }).error(function(error,status){

              callback(error, status);
          });
      //var deferred = $q.defer(),
      //    path = '/users/login';
      //  $http.post(path, loginData).success(function(data,status){
      //      deferred.resolve(data.data);
      //  }).error(function(error,status){
      //      if(status === 401) {
      //          deferred.reject('Unauthorized');
      //      }
      //      else {
      //          deferred.reject(error);
      //      }
      //  });
      //    console.log("promise instance",deferred.promise);
      //  return deferred.promise;
    }

      function signup(signupdata) {
          var deferred = $q.defer(),
              path = '/users/register';
          $http.post(path, signupdata).success(function(data,status){
              deferred.resolve(data.data);
          }).error(function(error,status){
              if(status === 401) {
                  deferred.reject('Unauthorized');
              }
              else {
                  deferred.reject(error);
              }
          });
          return deferred.promise;
      }
      function update(signupdata) {
          var deferred = $q.defer(),
              path = '/users';
          console.log("data to update ",signupdata);
          $http.put(path, signupdata).success(function(data,status){
              deferred.resolve(data.data);
          }).error(function(error,status){
              if(status === 401) {
                  deferred.reject('Unauthorized');
              }
              else {
                  deferred.reject(error);
              }
          });
          return deferred.promise;
      }

      function getall(callback) {
          var path = '/users';
          $http.get(path).success(function (data) {
              console.log("in get all",data);
              callback(undefined, data);

          }).error(function (error, status) {

              callback(error, status);
          });
      }
     function singleUSer(id,callback){
         var path='/users';
         $http.get(path+'/'+id).success(function (data) {
             callback(undefined, data);

         }).error(function (error, status) {

             callback(error, status);
         });

     }

     function  remove(id,callback){
         var path = '/users';
         $http.delete(path+'/'+id).success(function (data) {
             callback(undefined, data);

         }).error(function (error, status) {

             callback(error, status);
         });

     }

  }

})();