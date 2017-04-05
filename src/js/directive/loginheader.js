angular.module('app').directive('appLoginmainhead', [function () {
	return {
		restrict: 'A',
		replace:true, //只能有一个根元素
		templateUrl: 'view/template/loginmain-head.html',
		link:function($scope){
			
		}
	};
}])