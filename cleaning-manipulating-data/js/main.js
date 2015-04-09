(function(){

var arr = [0, 1, 2, 3, 4, 5, 6, 7];

var testCountBy = _.countBy(arr, function(num) {
  return num % 2 == 0 ? 'even' : 'odd';
});


console.log(testCountBy.odd,testCountBy.even);

}).call(this);