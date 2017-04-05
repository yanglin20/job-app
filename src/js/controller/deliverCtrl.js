'use strict';

// 后端交互  ajax 请求
angular.module('app').controller('deliverCtrl', ['$scope','$http', '$cookies','$state',function($scope,$http,$cookies,$state){
	$http({
		method:'get',
		url:'data/myPost.json',
		responseType:'json'
	}).then(function(resp){
		// console.log(resp.data);	
		$scope.data=resp.data;	
		
	},function(resp){
		console.log('请求失败：'+resp.status+','+resp.statusText);
	});
	

	$scope.flag=false;
	$scope.flag1=true;
	$scope.flag2=true;

	$scope.cal1 = {
        "border-bottom": "2px solid #12d5b5"
    }
	$scope.showAll=function(){
		$http({
            method: 'get',
            url: 'data/myPost.json',
            responseType: 'json'
        }).then(function(resp) {
            $scope.data= resp.data;
        }, function(resp) {
            console.log('请求失败：' + resp.status + ',' + resp.statusText);
        });
        $scope.flag=false;
		$scope.flag1=true;
		$scope.flag2=true;
        $scope.cal1 = {
        	"border-bottom": "2px solid #12d5b5"
    	}
    	$scope.cal2 = {
            "border-bottom": "0"
        }
        $scope.cal3 = {
            "border-bottom": "0"
        }
	}

	$scope.showInvite=function(){
		$http({
            method: 'get',
            url: 'data/myPost.json',
            responseType: 'json'
        }).then(function(resp) {
            $scope.data= resp.data[0];
        }, function(resp) {
            console.log('请求失败：' + resp.status + ',' + resp.statusText);
        });
        $scope.flag=true;
		$scope.flag1=false;
		$scope.flag2=true;
        $scope.cal2 = {
        	"border-bottom": "2px solid #12d5b5"
    	}
    	$scope.cal1 = {
            "border-bottom": "0"
        }
        $scope.cal3 = {
            "border-bottom": "0"
        }
	}

	$scope.showUnsuited=function(){
		$http({
            method: 'get',
            url: 'data/myPost.json',
            responseType: 'json'
        }).then(function(resp) {
            $scope.data= resp.data[1];
        }, function(resp) {
            console.log('请求失败：' + resp.status + ',' + resp.statusText);
        });
        $scope.flag=true;
		$scope.flag1=true;
		$scope.flag2=false;
        $scope.cal3= {
        	"border-bottom": "2px solid #12d5b5"
    	}
    	$scope.cal2 = {
            "border-bottom": "0"
        }
        $scope.cal1 = {
            "border-bottom": "0"
        }
	}

}])