const nums: number[] = [5, 6, 7];

// const a = 60;
// const b = a === 15;

const transformedArray = nums.map((x) => x * 6);
const transformedArray2 = myMap(nums, (x) => x * 6);

console.log(nums);

console.log(transformedArray, transformedArray2);

function myMap(array: number[], transform: any) {
  const result: number[] = [];

  for (const x of array) {
    const transformedValue = transform(x);
    result.push(transformedValue);
    // fn(5) -> 1
    // fn(6) -> 1
    // fn(7) -> 1
    // [1, 1, 1]
  }

  return result;
}

const names: string[] = ["Alex", "Kate", "Anna"];
const lens = names.map((name) => name.length);
console.log(lens);
