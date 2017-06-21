(function(){
	angular.module('eclass.controllers', [])

	.controller('searchController', ['$scope','$http', function($scope, $http){	
		
		// obtención del json de listados de spotify
		$scope.buscarEnSpotify = function(){

			if ($scope.text) {
	          var cancion_buscada = this.text;
	        }

	        $http({
				method: 'GET',
				url: 'https://api.spotify.com/v1/search?type=track&q='+cancion_buscada,
				headers: {
					'Authorization': 'Bearer BQAuv0vstEXmpC38MgDslP9NWYZ522b4dXwJTCnPMxSrioKUyAk3bugEgkbEKIuIhx1i4pyORf0JY7BGN1tpiQWgG3OeAVYRkKStWXhVTR0Tyo-6Oh2UyE2DzbVhG5dimtVfcUWv-kAHLYSgDLn9xz12OTCueOeHxlPqSy2G'
				}
			})
			.success(function(resultado){
				$scope.resultados = resultado.tracks.items;
				$scope.text = '';
				$('#buscar_btn').attr("disabled","disabled");
			});

			// prevent default para links de redes sociales
			setTimeout(function(){
				$('.acciones a').click(function(e){
					e.preventDefault();
				});
			}, 1000);
		}

	}])

	.controller('albumController', ['$scope','$http', function($scope, $http){	
		$http({
			method: 'GET',
			url: 'https://api.spotify.com/v1/albums/2J1e7x33Aejx7KFmVbgoGW',
			headers: {
				'Authorization': 'Bearer BQAuv0vstEXmpC38MgDslP9NWYZ522b4dXwJTCnPMxSrioKUyAk3bugEgkbEKIuIhx1i4pyORf0JY7BGN1tpiQWgG3OeAVYRkKStWXhVTR0Tyo-6Oh2UyE2DzbVhG5dimtVfcUWv-kAHLYSgDLn9xz12OTCueOeHxlPqSy2G'
			}
		})
			.success(function(album){
				$scope.albumName = album.name;
				$scope.albumCover = album.images[0].url;
		});
	}])

	.controller('albumControllerTracks', ['$scope','$http', function($scope, $http){	
		$http({
			method: 'GET',
			url: 'https://api.spotify.com/v1/albums/2J1e7x33Aejx7KFmVbgoGW/tracks',
			headers: {
				'Authorization': 'Bearer BQAuv0vstEXmpC38MgDslP9NWYZ522b4dXwJTCnPMxSrioKUyAk3bugEgkbEKIuIhx1i4pyORf0JY7BGN1tpiQWgG3OeAVYRkKStWXhVTR0Tyo-6Oh2UyE2DzbVhG5dimtVfcUWv-kAHLYSgDLn9xz12OTCueOeHxlPqSy2G'
			}
		})
			.success(function(artista){
				$scope.artista_name = artista.items[0].artists[0].name;
				$scope.canciones = artista.items;
		});
	}])
})();
