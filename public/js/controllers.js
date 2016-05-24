(function(){
	angular.module('eclass.controllers', [])

	.controller('searchController', ['$scope','$http', function($scope, $http){	
		
		// obtención del json de listados de spotify
		$scope.buscarEnSpotify = function(){

			if ($scope.text) {
	          var cancion_buscada = this.text;
	        }

	        // console.log($scope.text);

			$http.get('https://api.spotify.com/v1/search?type=track&q='+cancion_buscada)
			.success(function(resultado){
				$scope.resultados = resultado.tracks.items;
				$scope.text = '';
				console.log(resultado.tracks.items[0]);
			});
		}

		// validar longitud de input
		$(function(){
			function validar() {
				if( $('#buscador_spotify').val().length <= 3 ){
					$('#buscar_btn').attr("disabled","disabled");
				} else {
					$('#buscar_btn').attr("disabled", false);
				}
			}

			validar();

			$('#buscador_spotify')
				.blur(function(){
					validar();
				})
				.on('keydown', function(event) {
				   var x = event.which;
				   if (x === 13) {
				       event.preventDefault();
				   }
				});
		});
	}])

	.controller('albumController', ['$scope','$http', function($scope, $http){	
		
		$http.get('https://api.spotify.com/v1/albums/6Nvv5Jrk3cg5BdplDxEsHq/tracks')
		// $http.get('./songs.json')
			.success(function(artista){
				$scope.artista_name = artista.items[0].artists[0].name;
				$scope.canciones = artista.items;
		});
	}])
})();