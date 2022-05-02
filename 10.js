const array1 = [4, 1, 8, 5, 23]
const array2 = [654, 2, 8, 4, 7]

// const newArr = [...array1, ...array2]//
// console.log(newArr);///

const testFunction =(arr1, arr2)=>{
  const newArr = [...arr1, ...arr2]
  console.log(newArr);
}

testFunction(array1, array2)

