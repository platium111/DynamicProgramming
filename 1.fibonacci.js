// get 2 previous and sum to make the next
// 1 2 3 4 5 6
// 1 1 2 3 5 8

// [1st way] using direct code
const fib1 = (n) => {
  let first;
  let second;
  let next;
  let sum = 0;
  let arrayResult = [];
  for (let i = 1; i <= n; i++) {
    if (i === 1 || i === 2) {
      first = second = 1;
      arrayResult.push(1);
      sum += 1;
      continue;
    }

    next = first + second;
    arrayResult.push(next);
    if (i === n) {
      console.log("last element", next);
    }
    first = second;
    second = next;

    sum += next;
  }
  console.log("arrayResult", arrayResult);
  console.log("sum", sum);
};

fib1(15);

// [2nd way] - Using recursive
// ! if n is 50, very slow
const fib = (n) => {
  if (n <= 2) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
};
// console.log(fib(15));

// ----[Comment and Advanced]-----
// Should using tree to visualize memorization problems like recursive
//  - space | calculate by hight of tree, problem with time because to calculate 5, we need 5,4,3,2,1 -> total is 5 times to get the base case -> O(n) in space.
//   No need to care about other branches, because we just get the hight of the tree and calculate it to know Big(O)
//  - time | calculate by nodes in each level of tree, Number of nodes decrease -> not 2^n -> just O(n)
const different1 = (n) => {
  if (n <= 1) {
    return;
  }
  different1(n - 1);
  different1(n - 1);
};

// 5 -> 4 4 -> 3 3 3 3 -> 2 2 2 2 2 2 2 2 -> 16 nodes 1
// 1e -> 2e -> 4e -> 8e
// 1 * 2 * 2 * 2
// -> O(2^n) in time (number of nodes increase)
// -> 0(n) in space because we need 5 times call to get base node. It's equal for every calculation
//    if we we call 'different1(n-2)' mean that high decrease 2 times -> O(n/2) -> O(n)

// ----[Soving problems with time in fibionacci = dynamic programming ~ memorization]----
// see the pattern of not calculating again in branches
// time | O(n) because only 2 each branch
// space | O(n)
const advancedFib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = advancedFib(n - 1, memo) + advancedFib(n - 2, memo);
  return memo[n];
};

console.log("advanced fib", advancedFib(50));
