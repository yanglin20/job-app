'user strict';

angular.module('app').directive('appCollectHead', [function () {
	return {
		restrict: 'A',
		replace:true, //只能有一个根元素
		templateUrl: 'view/template/collect-head.html',
		link:function($scope){
			$scope.back=function(){
				window.history.back();
			}
		}
	};
}]).directive('appCollect', [function () {
	return {
		restrict: 'A',
		replace:true, //只能有一个根元素
		templateUrl: 'view/template/collect-content.html'
	};
}])