function findWaldo(arr, found) {
  arr.forEach(function(item, index, array) {
    if (item === "Waldo") {
      found(index)
    }
  });
}

function actionWhenFound(inx) {
  console.log("Found Waldo at index " + inx);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);