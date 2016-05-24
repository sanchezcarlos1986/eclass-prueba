(function(){
	angular.module('eclass.filters', [])
	
	.filter('trusted', ['$sce', function ($sce) {
	    return function(url) {
	        return $sce.trustAsResourceUrl(url);
	    };
	}]);

})();