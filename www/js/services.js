angular.module('starter.services', [])

.factory('Game', function() {
  
  var choices = [
  //add your choices
  ];
  var texts = [
  //add your texts
  ];

  //function caller in controllers
  return {
    getNextNode:function(node,choice){
        return (node+1);
        if(choices[node])
            return choice==0?choices[node].leftNode:choices[node].rightNode;
        else
            return -2;
    },
    getTexts:function(node){
        return texts[node];
    }
  };
});
