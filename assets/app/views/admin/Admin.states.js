/**
 * @description
 * 
 * A humpback-view created at Tue Aug 25 2015 11:28:21 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.Admin.states', [

])
.config(function config( $stateProvider, $urlRouterProvider) {
	$stateProvider
		.state( 'admin', {
			url: '^/admin',
			ncyBreadcrumb: {
          		label: 'Admin'
        	},
			views: {
				"main": {
					controller: 'AdminCtrl',
					templateUrl: 'app/views/admin/index.html'
				},
				"header@admin": {
					templateUrl: 'app/views/admin/header.html'
				}
			}
		})
		;
});