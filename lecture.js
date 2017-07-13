// Callback (item, index, array)

// Transformer (item, index, array) -> someOtherType
function map(array, transformer){
  var newArray = [];
  array.forEach(function(item, index, array){
    var transformed = transformer(item, index, array);
    newArray.push(transformed);
  });
  return newArray;
}
function square(x){ return x * x; }

//Map
console.log('========== MAP ==========');
console.log(map([3, 4, 5], square), [9, 16, 25]);
console.log(map([3, 4, 5], function(item, index){
  return item + "-" + index;
}), ["3-0", "4-1", "5-2"]);
console.log(map([3, 4, 5], function(item, index){
  return item * index;
}));

//Filter
console.log('========== FILTER ==========');
// Tester (item, index, array) -> boolean
function filter(array, tester){
  var newArray = [];
  array.forEach(function(item, index, array){
    if(tester(item, index, array)){
      newArray.push(item);
    }
  })
  return newArray;
}

function isOdd(x){
  return x % 2 !== 0
}

console.log('I Expect', filter([3, 4, 5], isOdd), [3, 5]);

console.log('========== FIND ==========');

// Tester (item, index, array) -> boolean
function find(array, tester){
  var foundValue;
  for(var i = 0; i < array.length; i++){
    if(tester(array[i], i, array)){
      foundValue = array[i];
      break;
    }
  }
  return foundValue;
}

  console.log('I Expect', find([3, 4, 5], isOdd), 3);