/**
 * @description
 * 
 * A humpback-view created at Sat Aug 29 2015 16:08:20 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.AdminDataView.states', [

])
.config(function config( $stateProvider, $urlRouterProvider) {
	$stateProvider
		.state( 'admin.data.data', {
			url: '/:id?skip?sort?limit?criteria?page',
			reloadOnSearch: false,
			ncyBreadcrumb: {
          		label: '{{ thismodel.name }}'
        	},
			views: {
				"admin@admin": {
					controller: 'AdminDataViewCtrl',
					templateUrl: 'app/views/admin/data/view/index.html'
				},
				"widgets@admin.data.data": {
					templateUrl: 'app/views/admin/data/view/widgets.html'
				}
			}
		})
		;
});