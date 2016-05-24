// Angular
(function(){
	var app = angular.module('eclass', [
		'ngRoute',
		'720kb.socialshare',
		'eclass.controllers',
		'eclass.directives',
		'eclass.filters'
	])

	.config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: './public/views/home.html'
				// controller: 'PokedexController'
			})
			
			.otherwise({
				redirectTo: '/'
			});
	}])

})();