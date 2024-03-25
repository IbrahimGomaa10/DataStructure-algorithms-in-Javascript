//////////////////////////// recursion

function sumNumbers(nums) {
  if (nums === 0) {
    return 0;
  }
  return nums + sumNumbers(nums - 1);
}

sumNumbers(3);

// Factorial

// recursion

function factorial(nums) {
  if (nums === 1) {
    return 1;
  }
  return nums * factorial(nums - 1);
}

factorial(9);

///////////////////////////////////
/// collect all odd numbers

function collectOddNumbers(arr) {
  let newArr = [];
  if (arr.length === 0) {
    return newArr;
  }
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddNumbers(arr.slice(1)));
  return newArr;
}

collectOddNumbers([1, 2, 3, 4]);

/*
    [1].concat(collectOddNumbers(2,3,4))
                    [].concat(collectOddNumbers(3,4))
                                   [3].concat(collectOddNumbers(4))
                                               [].concat(collectOddNumbers())
*/
