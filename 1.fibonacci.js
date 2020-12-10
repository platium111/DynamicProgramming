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

console.log(fib(15));
