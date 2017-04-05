'use strict';

// 后端交互  ajax 请求
angular.module('app').controller('collectCtrl', ['$scope','$http', '$cookies','$state',function($scope,$http,$cookies,$state){
	$http({
		method:'get',
		url:'data/myFavorite.json',
		responseType:'json'
	}).then(function(resp){
		// console.log(resp.data);	
		$scope.data=resp.data;	
		
	},function(resp){
		console.log('请求失败：'+resp.status+','+resp.statusText);
	});
	

	$scope.star="images/star-active.png";
    $scope.clickStar=function(){
    	if($scope.star=="images/star.png"){
    		$scope.star="images/star-active.png";
    	}else{
    		$scope.star="images/star.png";
    	}
    }
}])
