// time | each time need substract then get result and substract -> if targetSUm = m and array length = n -> O(n^m)
// space | O(m)

const canSum = (targetSum, arrNumbers) => {
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;
  for (let numElement of arrNumbers) {
    const remainElement = targetSum - numElement;
    if (canSum(remainElement, arrNumbers)) {
      // if it is true, return true immediately
      return true;
    }
  }
  return false;
};

console.log(canSum(7, [2, 3]));

// [ADVANCED - using memo]
// time | O(m * n)
// space | O(m)
const canSumMemo = (targetSum, arrNumbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;
  for (let numElement of arrNumbers) {
    const remainElement = targetSum - numElement;
    if (canSum(remainElement, arrNumbers)) {
      // if it is true, return true immediately
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
};

console.log("canSumMemo", canSumMemo(7, [2, 3]));
