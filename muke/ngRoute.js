var app = angular.module('ggithub',['ngRoute']);
app.controller('indexCtrl',function($scope){
	$scope.input = '填写你要显示的值';
})
app.config(['$routeProvider',function($routeProvider) {
	$routeProvider.when('/hello',{
		templateUrl:'hello.html',
		controller:'helloCtrl'
	}).when('/list',{
		templateUrl:'list.html',
		controller:'listCtrl'
	}).otherwise({
		redirectTo:'/hello'
	})

}])
app.controller('helloCtrl',function($scope) {
	$scope.name = 'helloCtrl';
})
app.controller('listCtrl',function($scope) {
	$scope.name = 'listCtrl';
})