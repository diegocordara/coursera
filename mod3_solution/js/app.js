(function(){
	'use_strict';

	angular.module('NarrowItDownApp',[])
	.controller('NarrowItDownController',NarrowItDownCtrl)
	.service('MenuSearchService',MenuSearchSvc)
	.constant('MenuRestAPI','https://davids-restaurant.herokuapp.com/menu_items.json')
	.filter('menu',MenuFilterFactory)
	.directive('foundItems',FoundItemsDirective);

	NarrowItDownCtrl.$inject = ['$scope','MenuSearchService'];
	function NarrowItDownCtrl($scope,MenuSearchService){
		var searcher = this;
		var service = MenuSearchService;

		searcher.searchTerm = "";
		searcher.found = function(){
			service.getMatchedMenuItems(searcher.searchTerm)
			.then(function(data){
				if(typeof(data.status) != 'undefined'){
					console.log("Error: ",data.status + " " + data.statusText);
				}else{

					console.log(data);
				}
			});
		};

		searcher.remove = function(index){
			searcher.found.splice(index,1);
		}
	};

	MenuSearchSvc.$inject = ['MenuRestAPI','$http','menuFilter'];
	function MenuSearchSvc(MenuRestAPI,$http,menuFilter){
		var service = this;
		var filter = menuFilter;

		service.getMatchedMenuItems = function(searchTerm){
			var promise = $http({
				url:MenuRestAPI
			}).then(function(response){
					return filter(searchTerm,response.data.menu_items);
				},function(response){
					return response;
				});
			return promise;
		};

		return service;
	}

	function MenuFilterFactory(){
		return function(searchTerm,items){
			var result = [];
			for(var i=0;i<items.length;i++){
				var item = items[i];
				if(item.description.indexOf(searchTerm) !== -1) result.push(item);
			}
			return result;
		};
	}

	function FoundItemsDirective(){
		var ddo = {
			scope:{
				foundItems: "=found"//,
				//onRemove:"&onRemove"
			},
			// restrict: 'E',
			controller: FoundItemsDirectiveController,
			bindToController: true,
			controllerAs: 'ctrl',
			templateUrl: 'directives/FoundItems.html'
		};
		return ddo;
	};

	function FoundItemsDirectiveController(){
		var ctrl = this;

		ctrl.foundItemsFromIS = function(){
			return ctrl.foundItems;
		}
	};
})();
