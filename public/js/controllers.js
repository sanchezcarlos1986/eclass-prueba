(function(){
	angular.module('eclass.controllers', [])

	.controller('EclassController', ['$scope','$http', function($scope, $http){	
		
		$http.get('https://api.spotify.com/v1/albums/6Nvv5Jrk3cg5BdplDxEsHq/tracks')
			.success(function(artista){
				$scope.artista_name = artista.items[0].artists[0].name;
				$scope.canciones = artista.items;
				console.log(artista);
		});
	}])
})();