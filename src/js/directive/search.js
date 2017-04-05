angular.module('app').directive('appSearchHead', [function () {
	return {
		restrict: 'A',
		replace:true, //只能有一个根元素
		templateUrl: 'view/template/search-head.html',
		
	};
}]).directive('appSearchSearch', [function () {
	return {
		restrict: 'A',
		replace:true, //只能有一个根元素
		templateUrl: 'view/template/search-search.html',
		
	};
}]).directive('appSearchCity', [function () {
	return {
		restrict: 'A',
		replace:true, //只能有一个根元素
		templateUrl: 'view/template/search-city.html',
		
	};
}]).directive('appSearchAlert', [function () {
	return {
		restrict: 'A',
		replace:true, //只能有一个根元素
		templateUrl: 'view/template/alert-bg.html',
		
	};
}])

