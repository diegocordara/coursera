(function(){
	'use_strict';

	angular.module('NarrowItDownApp',[])
	.controller('NarrowItDownController',NarrowItDownCtrl)
	.service('MenuSearchService',MenuSearchSvc)
	.constant('MenuRestAPIURL','https://davids-restaurant.herokuapp.com/menu_items.json')
	.filter('menu',MenuFilterFactory)
	.directive('foundItems',FoundItemsDirective);

	NarrowItDownCtrl.$inject = ['MenuSearchService'];
	function NarrowItDownCtrl(MenuSearchService){
		var searcher = this;
		var service = MenuSearchService;

		searcher.searchTerm = "";
		searcher.found = [];
		searcher.dirty = false;

		searcher.find = function(){
			if(searcher.searchTerm){
				service.getMatchedMenuItems(searcher.searchTerm)
				.then(function(data){				
					searcher.found = data;
				});
			}else{
				searcher.dirty = true;
				searcher.found = [];
			}
		};

		searcher.remove = function(index){
			searcher.found.splice(index,1);
		}
	};

	MenuSearchSvc.$inject = ['MenuRestAPIURL','$http','menuFilter'];
	function MenuSearchSvc(MenuRestAPIURL,$http,menuFilter){
		var service = this;
		var filter = menuFilter;

		service.getMatchedMenuItems = function(searchTerm){
			return $http({
				url:MenuRestAPIURL
			})
			.then(function(response){
				return filter(searchTerm,response.data.menu_items);
			});
		};
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
				foundItems: "<found",
				onRemove:"&",
				dirty:"<"
			},
			controller: function(){
				var ctrl = this;
				ctrl.nothingFoundMsg = "Nothing found";
			},
			bindToController: true,
			controllerAs: 'ctrl',
			templateUrl: 'directives/FoundItems.html'
		};
		return ddo;
	};
})();
