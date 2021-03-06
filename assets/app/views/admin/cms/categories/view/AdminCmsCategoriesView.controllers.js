/**
 * @description
 * 
 * A humpback-view created at Fri Sep 04 2015 17:31:09 GMT-0400 (EDT).
 */

angular.module( 'humpback.views.AdminCmsCategoriesView.controllers', [

])
.controller( 'AdminCmsCategoriesViewCtrl', function AdminCmsCategoriesViewController( $scope, $state, $stateParams, DS, Api) {
	$scope.category = new Api('category',{
		options: {
			bypassCache: true
		}
	});

	$scope.category.read($stateParams.id);

	$scope.category.Routes = new Api('route', {
		options: {
			bypassCache: true, 
			endpoint: '/category/' + $stateParams.id + '/routes'
		}
	});
	$scope.category.Routes.init();

	DS.bindOne('category', $stateParams.id, $scope, 'thiscategory');

	$scope.category.model = new Api('model', {
		criteria: {
			name: 'category'
		}
	});
	$scope.category.model.search()
	.then(function(models){
		$scope.category.model.selected = models[0];
	});

	$scope.updateCategory = function(){
		$scope.category.update($scope.thiscategory);
	}

	$scope.deleteCategory = function(){
		$scope.category.delete($scope.thiscategory)
		.then(function(thiscategory){
			$state.go('admin.cms.categories');
		});
	}

})
.controller( 'AdminCmsCategoriesNewCtrl', function AdminCmsCategoriesNewController( $scope, $state, $stateParams, DS, Api) {
	
	$scope.category = new Api('category', {
		isNew: true
	});
	$scope.thiscategory = $scope.category.selected;

	$scope.category.model = new Api('model', {
		criteria: {
			name: 'category'
		}
	});
	$scope.category.model.search()
	.then(function(models){
		$scope.category.model.selected = models[0];
	});
	
	$scope.createCategory = function(){
		console.log("Clicked");
		$scope.category.create($scope.thiscategory)
		.then(function(thiscategory){
			$state.go('admin.cms.categories.view',{id: thiscategory.id});
		});
	}


});