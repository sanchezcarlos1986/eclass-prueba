(function(){
	angular.module('eclass.directives', [])

	.directive('pokemonData', function(){
		return {
			restrict: 'E',
			templateUrl: '/partials/pokemon-data.html'
		}
	})

	.directive('pokemonStats', function(){
		return {
			restrict: 'E',
			templateUrl: '/partials/pokemon-stats.html'
		}
	})

	.directive('pokemonEvolutions', function(){
		return {
			restrict: 'E',
			templateUrl: '/partials/pokemon-evolutions.html'
		}
	})

	.directive('pokemonComments', function(){
		return {
			restrict: 'E',
			templateUrl: '/partials/comments.html',
			controller: function($scope){
				this.comments = [];
				this.comment = {};
				this.show = false;

				this.toggle = function(){
					this.show = !this.show;
				};

				this.anonymousChanged = function(){
					if(this.comment.anonymous) {
						this.comment.email = '';
					}
				};

				this.addComment = function(){
					this.comment.date = Date.now();
					this.comments.push(this.comment);
					this.comment = {};
				};
			},			
			controllerAs: 'cmtsCtrl'
		}
	});

})();