angular.module('app').directive('appPositionContent', [function () {
	return {
		restrict: 'A',
		replace:true, //只能有一个根元素
		templateUrl: 'view/template/positioncontent.html'
	};
}]).directive('appPositionInfo', [function () {
	return {
		restrict: 'A',
		replace:true, //只能有一个根元素
		templateUrl: 'view/template/position-info.html'
	};
}])