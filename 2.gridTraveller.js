// [Question + solution] visualize to grid
// only allow to go down, right
// -> solution is each time we go, shrink the answer

// [VISUALIZE]
//          (2,3)
// down (1,3) - right (2,2)
//   (0,3) (1,2) -         (1,2) (2,1)
// X (0,2) (1,1) - (0.2) (1,1) (1,1) (2,0) -> now all base, not calculate 0, only calculate base like (1,1)

// [Calculation Big O]
// -> go from bottom up -> get total = 3
// time | O(2^(n+m))
// space | O(n+m)
const gridTraveller = (m, n) => {
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  return gridTraveller(m - 1, n) + gridTraveller(m, n - 1);
};

// time | O(n*m)
// space | O(n+m)
const gridTravellerMemo = (m, n, memo = {}) => {
  const key = `${m},${n}`;
  if (key in memo) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  memo[key] = gridTraveller(m - 1, n, memo) + gridTraveller(m, n - 1, memo);
  return memo[key];
};
