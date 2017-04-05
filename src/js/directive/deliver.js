'user strict';

angular.module('app').directive('appDeliverHead', [function () {
	return {
		restrict: 'A',
		replace:true, //只能有一个根元素
		templateUrl: 'view/template/deliver-header.html',
		link:function($scope){
			$scope.back=function(){
				window.history.back();
			}
		}
	};
}]).directive('appDeliverSearch', [function () {
	return {
		restrict: 'A',
		replace:true, //只能有一个根元素
		templateUrl: 'view/template/deliver-search.html',
		
	};
}]).directive('appDeliverContent', [function () {
	return {
		restrict: 'A',
		replace:true, //只能有一个根元素
		templateUrl: 'view/template/deliver-content.html',
		
	};
}])
