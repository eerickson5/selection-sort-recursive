function selectionSortRecursive(arr) {
  if(arr.length > 1){
    const min = Math.min(...arr);
    const index = arr.indexOf(min);
    let editableArr = [...arr];
    editableArr.splice(index, 1);
    return([min, ...selectionSortRecursive(editableArr)])
  } else {
    return arr;
  }
  
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5, 234, 523]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2, 234, 523]));

  console.log("");

  console.log("Expecting: [-1]");
  console.log("=>", selectionSortRecursive([-1]));

  console.log("");
}

module.exports = selectionSortRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution

/*
what i want to do here is 
find the lowest
return it and result of recursion(rest of array)
it would be faster to modify the original array with splice but i'm supposed to make a copy so ill do that
*/