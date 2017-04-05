'use strict';

// 后端交互  ajax 请求
angular.module('app').controller('registCtrl', ['$scope','$http','$interval','$cookies','$state', function($scope,$http,$interval,$cookies,$state){
	$scope.flag1=false;
	$scope.flag2=false;
	$scope.checkRegistPhone=function(){
		var reg=/^1[\d]{10}$/;
		if(reg.test($scope.rephone)){
			$scope.checkphone="✅";
			$scope.flag1=true;
		}else{
			$scope.checkphone="❌";
			$scope.flag1=false;
		}
	};
	
	$scope.checkRegistPassword=function(){
		var reg=/^[\w]{6,12}$/;
		if(reg.test($scope.repassword)){
			$scope.checkpassword="✅";
			$scope.flag2=true;
		}else{
			$scope.checkpassword="❌";
			$scope.flag2=false;
		}
	}
	
	$scope.dis=false;

	$scope.sendtxt="短信验证码";
	$scope.sendCode=function(){
		$scope.sendtxt=5;
		var timer=$interval(doReduce,1000);

		function doReduce(){
			$scope.sendtxt--;
			if($scope.sendtxt===0){
				$interval.cancel(timer);
				$scope.sendtxt="重新发送";
			}

		}
		$scope.code=generateRandomCode();

	}
	
	$scope.checkRegist=function(){
		console.log(22);
		if($scope.flag1 && $scope.flag2){
			console.log(33);
			$cookies.putObject('register',{phone:$scope.rephone,password:$scope.repassword});
			// $state.go='login';
		}
	}
	


	//产生4位随机数
	function generateRandomCode(){
			var str="";
			for(var i=1;i<=4;i++){
				var n=parseInt(Math.random(i)*10);
				str+=n;
			}
			return str;
		}

}])