//IIFE -  immediately-invoked function expression.
(function(){
	'use strict';

	angular.module('ShoppingListCheckOff',[])
	.controller('ToBuyController',ToBuyCtrl)
	.controller('AlreadyBoughtController',AlreadyBoughtCtrl)
	.service('ShoppingListCheckOffService',ShoppingListCheckOffSvc);

	ToBuyController.$inject=['$scope','ShoppingListCheckOffService'];
	function ToBuyCtrl($scope,ShoppingListCheckOffService){
		var ToBuy = this;
		var service = ShoppingListCheckOffService; 
		ToBuy.List = service.toBuyList;
		ToBuy.Remove = function(index){
			service.RemoveToBuyListItem(index);
		}
	}

	AlreadyBoughtController.$inject = ['$scope','ShoppingListCheckOffService'];
	function AlreadyBoughtCtrl($scope,ShoppingListCheckOffService){
		var Bought = this;
		var service = ShoppingListCheckOffService;
		Bought.List = service.boughtList;		
	};
	
	function ShoppingListCheckOffSvc(){
		var service = this;
		service.toBuyList = [
			{ name: "cookies", quantity: 10 },
			{ name: "chips", quantity: 2 },
			{ name: "cokes", quantity: 5 },
			{ name: "milks", quantity: 4 },
			{ name: "cheese", quantity: 1 }
		];
		service.boughtList = [];

		service.AddBoughtListItem = function(item){
			service.boughtList.push(item);
		};
		service.RemoveToBuyListItem = function(index){
			service.AddBoughtListItem(service.toBuyList[index]);
			service.toBuyList.splice(index,1);
		};
		return service;
	};

})();