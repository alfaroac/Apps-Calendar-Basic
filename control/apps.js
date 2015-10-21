var cal=angular.module('calApp',['ngRoute']);
	cal.config(['$routeProvider',
		function($routeProvider) {
			$routeProvider.
			when('/agenda',{
				templateUrl:'templates/calendar.html',
			}).
            when('/templates/inicio',{
				templateUrl:'templates/iniciow.html',
			}).
			otherwise({
				redirectTo:'/',
				templateUrl:'templates/inicio.html',
			});
			
	}]);