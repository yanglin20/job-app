'use strict';

// 后端交互  ajax 请求
angular.module('app').controller('meCtrl', ['$scope','$http', '$cookies',function($scope,$http,$cookies){
	
	var register=$cookies.getObject('register');
	$scope.flag=false;
	$scope.flag1=true;
	if(register){
		$scope.flag=true;
		$scope.flag1=false;
		$scope.phone=register.phone;
	}else{
		$scope.phone="";
		$scope.flag=false;
		$scope.flag1=true;
	}



	$http({
		method:'get',
		url:'data/login.json',
		responseType:'json'
	}).then(function(resp){
		// console.log(resp.data);	
		$scope.data=resp.data;	
		
	},function(resp){
		console.log('请求失败：'+resp.status+','+resp.statusText);
	});


	$scope.exit=function(){
		$cookies.remove('register');
	}

}])