'use strict';

// 后端交互  ajax 请求
angular.module('app').controller('mainCtrl', ['$scope','$http', '$cookies',function($scope,$http,$cookies){
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
	
	var register=$cookies.getObject('register');
	$scope.flag=false;
	if(register){
		$scope.flag=true;
		$scope.phone="你好，"+register.phone;
		// $scope.phone="你好，网博君";
	}else{
		$scope.phone="";
		$scope.flag=false;

	}

}])







