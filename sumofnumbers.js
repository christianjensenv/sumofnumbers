const sumNums = [1, 5, 2, 7];

function sumFor(nums) {
  let totalNum = 0;
  for (const num of nums) {
    totalNum += num;
  }
  return totalNum;
}

console.log(sumFor(sumNums));

function sumWhile(nums) {
  let totalNum = 0;
  let i = 0;
  while (i < nums.length) {
    totalNum += nums[i];
    i++;
  }
  return totalNum;
}

console.log(sumWhile(sumNums));

function sumRecursion(nums) {
  if (nums.length === 0) {
    return 0;
  }
  return nums[0] + sumRecursion(nums.slice(1, nums.length));
}

console.log(sumRecursion(sumNums));

function sumTheSimpleWay(sums) {
  return _.reduce(sums, function (memo, num) {
    return memo + num;
  }, 0);
}

console.log(sumTheSimpleWay(sumNums));
