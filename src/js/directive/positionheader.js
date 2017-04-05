'user strict';

angular.module('app').directive('appPositionHead', [function () {
	return {
		restrict: 'A',
		replace:true, //只能有一个根元素
		templateUrl: 'view/template/positionhead.html',
		link:function($scope){
			$scope.back=function(){
				window.history.back();
			}
		}
	};
}])

angular.module('app').directive('appPositionFooter', [function () {
	return {
		restrict: 'A',
		replace:true, //只能有一个根元素
		templateUrl: 'view/template/positionfooter.html'
	};
}])




