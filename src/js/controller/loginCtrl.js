'use strict';

// 后端交互  ajax 请求
angular.module('app').controller('loginCtrl', ['$scope','$http', '$cookies','$state',function($scope,$http,$cookies,$state){
	
	var register=$cookies.getObject('register');
	if(register){
		$scope.phone=register.phone;
	}else{
		$scope.phone='';
	}
	
	$scope.checkLogin=function(){
		if($scope.lophone==register.phone && $scope.lopassword==register.password){
			$scope.check="";
			$state.go('main');
		}else{
			$scope.check="用户名或者密码错误";
		}
	}

	
	



}])