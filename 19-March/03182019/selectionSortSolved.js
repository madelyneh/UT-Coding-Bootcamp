// ===============================================
// RUN THIS USING NODE
// ===============================================
// This is better with less memory. 
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
// SOLUTION - Selection Sort
// ================================================

function swap(items, firstIndex, secondIndex) {
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

function selectionSort(items) {

  var length = items.length;
  var min;

  for (var outerMin = 0; outerMin < length; outerMin++) {

    // set index of minimum to this position
    min = outerMin;

    // check the rest of the array to see if anything is smaller
    for (var innerMin = outerMin + 1; innerMin < length; innerMin++) {
      if (items[innerMin] < items[min]) {
        min = innerMin;
      }
    }

    // if the current position isn't the minimum, swap it and the minimum
    if (outerMin !== min) {
      swap(items, outerMin, min);
    }
  }

  return items;
}

// ================================================
// FUNCTION CALL
// ================================================
console.log("PRE-SORT");
console.log(array.join(" "));
console.log("---------------------------");
console.log("POST-SORT");
console.log(selectionSort(array).join(" "));
