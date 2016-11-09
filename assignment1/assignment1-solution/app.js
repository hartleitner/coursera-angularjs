(function(){
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
  $scope.items = "";
  $scope.message = "";

  $scope.checkAmount = function(){
    $scope.itemsArray = $scope.items.split(',');
    // $scope.arraylength = $scope.itemsArray.length;
    if($scope.itemsArray.length  <=1 && $scope.itemsArray[0] === ""){
      $scope.message = "Please enter data first";
      }
    else if ($scope.itemsArray.length >=1 && $scope.itemsArray.length <=3){
      $scope.message = "Enjoy!";
    }
    else if ($scope.itemsArray.length > 3){
      $scope.message = "Too much!";
    }
    else{
      $scope.message = "Error 404";
    }
  };
}


})();
