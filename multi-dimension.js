module.exports = function () {
    return {
      showElement: function(ar, position){
          if(!Array.isArray(ar)){
              console.log(position + ': ' + ar);
          } else {
              ar.forEach(function(element, index, parent){
                  showElement(element, position ? position + '.' + index : index.toString());
              });
          }
      }
   }
}
