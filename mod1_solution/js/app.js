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
			console.log(items);
			if(items.length == 0){
				$scope.resultMsg = "Please, insert at least one valid dish";
			}else if(items.length <= 3){
				$scope.resultMsg = "Enjoy!";
			}else{
				$scope.resultMsg = "Too much!";
			}
		}

		function getFilteredList(){
			var items = $scope.lunchList.split(",");
			console.log(items);
			for(var i=0; i < items.length ;i++){
				console.log("item " + i + " before "+items[i]);
				if(items[i] == "") items.splice(i-1,1);
				console.log("item " + i + " after "+items[i]);
				console.log(items);
			}
			return items;
		}
	}


})();