(function() {
    'use strict';

    angular
        .module('MeanApp')
        .config(config)
        .run(run);

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider'];
    run.$inject = ['$rootScope', '$location', 'Auth', '$cookies'];

    function config($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
        $urlRouterProvider.otherwise('/app/login');
        //$stateProvider
        //    .state('login', {
        //        url: '/login',
        //        templateUrl: 'app/user/login.html',
        //        controller: 'LoginController'
        //    })
        //    .state('signup', {
        //        url: '/signup',
        //        templateUrl: 'app/user/signup.html',
        //        controller: 'SignUpController'
        //    })
        //    .state('userdetail', {
        //    url: '/userdetail',
        //    templateUrl: 'app/user/userdetail.html',
        //    controller: 'UserDetailController'
        //    })
        //   .state('update', {
        //        url: '/update?id',
        //        templateUrl: 'app/user/update.html',
        //        controller: 'UpdateController'
        //    });

        $stateProvider
            .state('app', {
                url : '/app',
                abstract : true,
                templateUrl: 'app/layout/layout.html'
            })
            .state('app.login', {
                url:'/login',
                views: {
                    'header' : {
                        template: '<h1>Header</h1>'
                    },
                    'main' : {
                        templateUrl: 'app/user/login.html',
                        controller: 'LoginController'
                    }

                }


            })

            .state('app.signup', {
                url:'/signup',
                views: {
                    'header' : {
                        template: '<h1>Header</h1>'
                    },
                    'main' : {
                        templateUrl: 'app/user/signup.html',
                        controller: 'SignUpController'

                    }
                }

            })
            .state('app.users',{
                url:'/users',
                views:{
                    'header': {
                        templateUrl:'app/user/header.html',
                    },
                    'main': {
                        template:'<div ui-view></div>'
                    }
                }
            })
            .state('app.users.userdetail', {
                url:'/userdetail',

                        templateUrl: 'app/user/userdetail.html',
                        controller: 'UserDetailController'

            })
            .state('app.users.update', {
                url:'/update?id',

                        templateUrl: 'app/user/update.html',
                        controller: 'UpdateController'


            })

    }
    function run($rootScope, $location, Auth, $cookies, $scope, $cookieStore ) {

        $rootScope.userjson = $cookies.get('user');

    }
})();