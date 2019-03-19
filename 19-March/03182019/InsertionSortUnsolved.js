// ===============================================
// RUN THIS USING NODE
// ===============================================
//This is faster but uses more memory
// ================================================
// TEST CASES
// ================================================

// Case 1 - Small Set of Numbers
var arraySize = 40;

// // Case 2 - Large set of Numbers
// var arraySize = 400000;

var array = [];
for (var index = 0; index < arraySize; index++) {
  var randomNumber = Math.round(Math.random() * arraySize);

  array.push(randomNumber);
}

// ================================================
// SOLUTION - Insertion Sort
// ================================================

let insertionSort = function(items) {
  let newArray = [];
  let min;

  for (let outer=0; outer < items.length; outer++) {
    min = outer;
    newArray.push(items[outer]);

    for (let inner=outer+1; inner <items.length; inner++) {
      if (items[min] < items[inner]){
        newArray.push(items[inner]);
      } else if (items[min] > items[inner]) {
        newArray.splice(min, 0, items[inner])
      }
    }
    return newArray;
  }
  
}

// ================================================
// FUNCTION CALL
// ================================================
console.log("PRE-SORT");
console.log(array.join(" "));
console.log("---------------------------");
console.log("POST-SORT");
console.log(insertionSort(array).join(" "));
