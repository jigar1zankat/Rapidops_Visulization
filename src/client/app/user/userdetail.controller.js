(function() {
    'use strict';

    angular
        .module('MeanApp')
        .controller('UserDetailController', UserDetailCtrl);

    UserDetailCtrl.$inject = ['$scope', 'Auth', '$state','lodash','$cookieStore','$rootScope'];


    function UserDetailCtrl($scope, Auth, $state,lodash ,$cookies,$rootScope) {
        console.log("this is lodash",lodash);
        $scope.alluser={};
        var datas=[];
        Auth.getall(function(err,data){
            if(err)
            {
                console.log(err+ "err n data "  +data);
                alert('Invalid Username or Password');
            }
            else {
                console.log(" data "  ,data.data);
                console.log('success');
                $scope.alluser=data.data;
                datas = _.remove( $scope.alluser, function(a){
                    return (a._id!=$rootScope.userjson._id);
                });
                $scope.alluser=datas;
               // $scope.usr= $cookies.get('user');
               // $rootScope.userjson
                $state.go('app.users.userdetail')
            }

        });
        $scope.remove=function(id){
            if(confirm("are you sure to delete data???")){
                console.log("id is",id);
                Auth.remove(id,function(err,data){
                    if(err)
                    {
                        console.log(err+ "err n data "  +data);
                        alert('Invalid Username or Password');
                    }
                    else {
                        console.log(" data "  ,data);
                        console.log('success');
                        console.log("scope.alluser =",$scope.alluser);
                        datas = _.remove( $scope.alluser, function(a){
                            return (a._id!=data.data._id);
                        });
                        console.log("data in datas",datas);
                        console.log("data in datas of scope",$scope.alluser);
                        $scope.alluser=datas;
                        $state.go('app.users.userdetail')
                    }

                });
                $scope.deletedConfirm = 'Deleted';

            }


            else {
                console.log('cancel');
            }



        };
    }

})();