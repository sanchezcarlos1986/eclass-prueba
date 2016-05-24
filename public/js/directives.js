(function(){
	angular.module('eclass.directives', [])

	.directive('searchView', function(){
		return {
			restrict: 'E',
			templateUrl: './public/partials/search.html'
		}
	})

	.directive('albumView', function(){
		return {
			restrict: 'E',
			templateUrl: './public/partials/album.html'
		}
	})

	.directive('accionesItem', function(){
		return {
			restrict: 'E',
			templateUrl: './public/partials/acciones.html'
		}
	})
	
	.directive('customPopover', function () {
	    return {
	        restrict: 'A',
	        // template: '<a>{{label}}</a>',
	        link: function (scope, el, attrs) {
	            scope.label = attrs.popoverLabel;
	            $(el).popover({
	                trigger: 'click',
	                html: true,
	                content: attrs.popoverHtml,
	                placement: attrs.popoverPlacement
	            });
	        }
	    };
	});

})();