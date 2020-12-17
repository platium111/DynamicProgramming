// m is target sum, n is numbers
// time | O(n^m * m)
// space | O(m)
const howSum = (targetSum, arrNumbers) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  for (let numElement of arrNumbers) {
    const remainElement = targetSum - numElement;
    const remainResult = howSum(remainElement, arrNumbers); // result of next
    if (remainResult !== null) {
      return [...remainResult, numElement]; // result of next + current number
    }
  }
  return null;
};

console.log(howSum(7, [2, 3, 4, 7]));

// time | O(n*m)
// space | O(m * n ~ m^2) => almost from memo with m key and n in array
const howSumMemo = (targetSum, arrNumbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  for (let numElement of arrNumbers) {
    const remainElement = targetSum - numElement;
    const remainResult = howSum(remainElement, arrNumbers); // result of next
    if (remainResult !== null) {
      memo[targetSum] = [...remainResult, numElement]; // result of next + current number
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return null;
};

// -> short step
// 7
// 3 (-4)
// 4 (-3)
// 0
// * 0 (result of next) + 3 (current number)

// algorithm visualization
// if we have 7, [2,3,4,7]
// need to shrink size by substract
// 7
// 5(-2) | 4(-3) | 3(-4) | 0(7)
// 3 2 1 | 2 1 0 | 1 0 | OK
// 1 xxxxxxx
// [_see_the_pattern_] = result of next + current number
// -> each time substract, get result, using result to substract -> remainder = target - num
// if < 0 -> return null | if = 0 return []
