(function() {
  'use strict';

  angular
    .module('MeanApp', [
      'ui.router','ngLodash','ngCookies'  , 'angular-loading-bar' , 'cfp.loadingBar'
    ])
      .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
          cfpLoadingBarProvider.includeBar = false;
      }])

  ;

})();