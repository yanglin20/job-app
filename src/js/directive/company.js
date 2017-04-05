angular.module('app').directive('appCompanyHead', [function () {
	return {
		restrict: 'A',
		replace:true, //只能有一个根元素
		templateUrl: 'view/template/company-head.html',
		link:function($scope){
			$scope.back=function(){
				window.history.back();
			}
		}
	};
}]).directive('appCompanyClassify', [function () {
	return {
		restrict: 'A',
		replace:true, //只能有一个根元素
		templateUrl: 'view/template/company-classify.html',
		
	};
}])
