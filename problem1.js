function problem1(arr, value) {
  // Check if arr is an array
  if (!Array.isArray(arr)) {
      return ('Inventory should be of type array');
  }
  // Check if value is greater than 0
  if (value <= 0) {
      return ('Id should be greater than 0');
  }
  // Find the car object with the given id using a for loop
  for (let i = 0; i < arr.length; i++) {
      if (arr[i].id === value) {
          return arr[i];
      }
  }
  return null; // Return null if no car object with the desired id is found
}

module.exports = problem1;