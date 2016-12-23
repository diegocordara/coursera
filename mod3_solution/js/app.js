(function(){
	'use_strict';


	angular.module('NarrowItDownApp',[])
	.controller('NarrowItDownController',NarrowItDownCtrl)
	.service('MenuSearchService',MenuSearchSvc)
	.constant('MenuRestAPI','https://davids-restaurant.herokuapp.com/menu_items.json.')
	.directive('foundItems',FoundItemsDirective);

	NarrowItDownCtrl.$inject = ['$scope','MenuSearchService'];
	function NarrowItDownCtrl($scope,MenuSearchService){
		var Searcher = this;
		Searcher.searchTerm = "";		
		Searcher.found = function(){
			MenuSearchService.getMatchedMenuItems(Searcher.searchTerm);
		}
		

	};

	MenuSearchSvc.$inject = ['MenuRestAPI'];	
	function MenuSearchSvc(MenuRestAPI){
		var MenuSearch = this;
		
		MenuSearch.getMatchedMenuItems = function(searchTerm){
			//Retrieve menu items. $http
			//Make the search 
			//Retrieve filtered list (promise)
			//console.log("SearchTerm: ",searchTerm);
			console.log([{item1:'elem1'},{item2:'elem2'}]);
		};
	}

	function FoundItemsDirective(){
		var ddo = {
			scope={
				found: "<foundItems"
			},
			controller: FoundItemsDirectiveController,
			bindToController: true,
			controllerAs: 'ctrl'
		};
		return ddo;
	};

	function FoundItemsDirectiveController(){
		console.log(ctrl.found);
	};
})();