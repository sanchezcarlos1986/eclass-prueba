// Angular
(function(){
	var app = angular.module('eclass', ['eclass.controllers']);
})();

// jQuery
$(function(){
	setTimeout(function(){	

		$('[rel="popover"]').popover({
	        html: true,
	        content: function () {
	            return $("#example-popover-2-content").html();
	        }
		}).click(function(e) {
	        e.preventDefault();
	    });
	}, 1000);
});