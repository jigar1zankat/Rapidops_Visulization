(function() {
    'use strict';

    angular
        .module('MeanApp')
        .config(config)
        .run(run);

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider'];
    run.$inject = ['$rootScope', '$location', 'Auth', '$cookies'];

    function config($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
        $urlRouterProvider.otherwise('/app/home');

        $stateProvider
            .state('app', {
                url : '/app',
                abstract : true,
                templateUrl: 'app/layout/layout.html'
            })
            .state('app.home', {
                url:'/home',
                views: {
                    'header' : {
                        templateUrl: 'app/user/header.html'
                    },
                    'main' : {
                        templateUrl: 'app/user/home.html',
                        controller: 'HomeController'
                    }

                }


            })

            .state('app.showorganization', {
                url:'/showorganization',
                views: {
                    'header' : {
                        templateUrl: 'app/user/header.html'
                    },
                    'main' : {
                        templateUrl: 'app/user/showorganization.html',
                        controller: 'ShowOrganizationController'

                    }
                }

            })
            .state('app.showpeople',{
                url:'/showpeople',
                views:{
                    'header': {
                        templateUrl:'app/user/header.html'
                    },
                    'main': {
                        templateUrl: 'app/user/showpeople.html',
                        controller: 'ShowPeopleController'
                    }
                }
            })
            .state('app.new',{
                url:'/new',
                views:{
                    'header': {
                        templateUrl:'app/user/header.html'
                    },
                    'main': {
                        templateUrl: 'app/user/new.html',
                        controller: 'NewController'
                    }
                }
            })
            .state('app.organizationdata',{
                url:'/organizationdata/:id',
                views:{
                    'header': {
                        templateUrl:'app/user/header.html'
                    },
                    'main': {
                        templateUrl: 'app/user/organizationdata.html',
                        controller: 'OrganizationDataController'
                    }
                }
            })
            .state('app.peopledata',{
                url:'/peopledata/:id',
                views:{
                    'header': {
                        templateUrl:'app/user/header.html'
                    },
                    'main': {
                        templateUrl: 'app/user/peopledata.html',
                        controller: 'PeopleDataController'
                    }
                }
            })
    }
    function run($rootScope, $location, Auth, $cookies, $scope, $cookieStore ) {


    }
})();