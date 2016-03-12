angular.module('starter.controllers', [])

.controller('GameCtrl', function($scope, $document, Game) {
  if($scope.cntNode)
    $scope.texts = Game.getTexts($scope.cntNode);
  else {
      //WARNING should be init
      $scope.cntNode = 0;
      $scope.texts = Game.getTexts($scope.cntNode);
  }
  $scope.contentHeight = 2000;
  console.log($scope.contentHeight);

  //Warning hard code of left 0 and right 1
  $scope.makeChoice = function(node,choice){
      var buttons = angular.element("button");
      $scope.disableColor = "#ffffff";
      for(var i = 0;i<buttons.length;i++){
          buttons[i].setAttribute("disabled","true");
          //buttons[i].style.color="0#ffffff";
      }
      $scope.cntNode = Game.getNextNode(node,choice);
      console.log($scope.cntNode);
      $scope.lastDivCount = $scope.texts.length;
      if($scope.cntNode==-2){
          $scope.texts.push({content:"Errrrrrrrrrrrrrrrrrrrrror!"});
      }
      else if($scope.cntNode==-1){
          $scope.texts.push({content:"ending!"});
      }
      else {
          $scope.texts = $scope.texts.concat(Game.getTexts($scope.cntNode));
      }
      $scope.contentHeight = $scope.contentHeight + 100*Game.getTexts($scope.cntNode).length;
      //console.log($scope.texts.length+" "+$scope.cntDivCount);
  };

});
