function getMaxNumber(nums: number[]) {
  let maxNumber = nums[0];
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] > maxNumber) {
      maxNumber = nums[index];
    }
  }
  return maxNumber;
}

function remove(nums: number[], index: number) {
  const result = [];

  for (let i = 0; i < index; i++) {
    result.push(nums[i]);
  }

  for (let i = index + 1; i < nums.length; i++) {
    result.push(nums[i]);
  }

  return result;
}

console.log(getMaxNumber([5, 4, 6, 5, 1, 3])); // 6
// [5, 4, 6, 1, 3]
console.log(remove([5, 4, 6, 5, 1, 3], 5)); // 6

// console.log(getMaxNumber([{ id: 5 }, { id: 6 }])); // 6
