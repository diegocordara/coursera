(function(){
	'use strict';

	angular.module("LunchCheck",[])
	.controller("LunchCheckController", LunchCheckController);

	LunchCheckController.$inject=['$scope'];
	function LunchCheckController($scope){
		$scope.lunchList = "";
		$scope.resultMsg = "";

		$scope.check = function(){
			var items = getFilteredList();
			$scope.lunchList = items;
			console.log(items);
			if(items.length == 0){
				$scope.resultMsg = "Please, enter data first";
			}else if(items.length <= 3){
				$scope.resultMsg = "Enjoy!";
			}else{
				$scope.resultMsg = "Too much!";
			}
		}

		function getFilteredList(){
			var items = $scope.lunchList.split(",");
			var itemsFiltered = [];
			for(var i=0; i < items.length ;i++){
				var trimmedItem = items[i].trim();				
				if(trimmedItem != "") itemsFiltered.push(trimmedItem);
			} 
			return itemsFiltered;
		}
	}


})();
