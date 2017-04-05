'use strict';

// 后端交互  ajax 请求
angular.module('app').controller('showCtrl', ['$scope','$http','$state','$cookies', function($scope,$http,$state,$cookies){
	$http({
		method:'get',
		url:'data/position.json?='+$state.params.id,
		responseType:'json'
	}).then(function(resp){
		// console.log($state.params.id);
		$scope.position=resp.data;
		// console.log(resp.data);
		
	},function(resp){
		console.log('请求失败：'+resp.status+','+resp.statusText);
	});
	

	$http({
		method:'get',
		url:'data/company.json?='+$state.params.id,
		responseType:'json'
	}).then(function(resp){
		// console.log($state.params.id);
		$scope.company=resp.data;
		// console.log(resp.data);
	},function(resp){
		console.log('请求失败：'+resp.status+','+resp.statusText);
	});

	$scope.flag1=true;
	$scope.flag2=false;
	$scope.doChange1=function(){
		$scope.flag1=true;
		$scope.flag2=false;
		$scope.btn1={
			"color" : "white",
    		"background-color" : "#12d5b5",
		}
		$scope.btn2={
			"color" : "#000",
    		"background-color" : "#def8f5",
		}
	}
	$scope.doChange2=function(){
		$scope.flag1=false;
		$scope.flag2=true;
		$scope.btn2={
			"color" : "white",
    		"background-color" : "#12d5b5",
		}
		$scope.btn1={
			"color" : "#000",
    		"background-color" : "#def8f5",
		}
	}

	$scope.flag11=true;
    var register=$cookies.getObject('register');
    if(register){
       $scope.flag11=false;
    }else{
        $scope.flag11=true;
    }

    $scope.star="images/star.png";
    $scope.toujianli="投个简历";
    $scope.clickStar=function(){
    	if($scope.star=="images/star.png"){
    		$scope.star="images/star-active.png";
    		$scope.toujianli="已投递";
    	}else{
    		$scope.star="images/star.png";
    		$scope.toujianli="投个简历";
    	}
    }

}])