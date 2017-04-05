'use strict';
// 后端交互  ajax 请求
angular.module('app').controller('searCtrl', ['$scope', '$http', function($scope, $http) {
    $http({
        method:'get',
        url:'data/positionList.json',
        responseType:'json'
    }).then(function(resp){
        // console.log(resp.data);  
        $scope.data=resp.data;  
        
    },function(resp){
        console.log('请求失败：'+resp.status+','+resp.statusText);
    });

    $scope.flag = true;
    $scope.flag1 = true;

    $scope.showCity = function() {
        $http({
            method: 'get',
            url: 'data/city.json',
            responseType: 'json'
        }).then(function(resp) {
            // console.log(resp.data);	
            $scope.ss = resp.data;
        }, function(resp) {
            console.log('请求失败：' + resp.status + ',' + resp.statusText);
        });
        $scope.flag = !$scope.flag;
        $scope.flag1 = !$scope.flag1;
        $scope.cal1 = {
            "border-bottom": "2px solid #12d5b5"
        }
    }

    $scope.showSalary = function() {
        $http({
            method: 'get',
            url: 'data/salary.json',
            responseType: 'json'
        }).then(function(resp) {
            // console.log(resp.data);	
            $scope.ss = resp.data;
        }, function(resp) {
            console.log('请求失败：' + resp.status + ',' + resp.statusText);
        });
        $scope.flag = !$scope.flag;
        $scope.flag1 = !$scope.flag1;
        $scope.cal2 = {
            "border-bottom": "2px solid #12d5b5"
        }
    }

    $scope.showScale = function() {
        $http({
            method: 'get',
            url: 'data/scale.json',
            responseType: 'json'
        }).then(function(resp) {
            // console.log(resp.data);	
            $scope.ss = resp.data;
        }, function(resp) {
            console.log('请求失败：' + resp.status + ',' + resp.statusText);
        });
        $scope.flag = !$scope.flag;
        $scope.flag1 = !$scope.flag1;
        $scope.cal3 = {
            "border-bottom": "2px solid #12d5b5"
        }
    }

    $scope.alert = function() {
        $scope.flag = true;
        $scope.flag1 = true;
        $scope.cal1 = {
            "border-bottom": "0"
        }
        $scope.cal2 = {
            "border-bottom": "0"
        }
        $scope.cal3 = {
            "border-bottom": "0"
        }
    }


     

}])
