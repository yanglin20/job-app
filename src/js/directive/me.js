angular.module('app').directive('appMe', [function () {
	return {
		restrict: 'A',
		replace:true, //只能有一个根元素
		templateUrl: 'view/template/me-login.html',
		
	};
}])