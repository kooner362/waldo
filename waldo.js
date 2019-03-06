// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  var i = 0;
  arr.forEach (function(name) {
    if (name === "Waldo") {
      found(i);   // execute callback
    }
    i++;
  });
}

function actionWhenFound(index) {
  console.log("Found Waldo at index " + index + '!');
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
