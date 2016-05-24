// Angular
(function(){
	var app = angular.module('eclass', [
		'ngRoute',
		'eclass.controllers',
		'eclass.directives',
		'eclass.filters'
	]);

	app.config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: './public/views/home.html'
				// controller: 'PokedexController'
			})
			
			.otherwise({
				redirectTo: '/'
			});
	}]);

})();