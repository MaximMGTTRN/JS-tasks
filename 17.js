const array1 = [5, 2, 7, 3, 6, 8, 2, 9, 1]
const array2 = [4, 2, 9, 4, 5, 4]

const testFunction = (arr1, arr2) => {
  const newArr = []
  arr1.forEach(item1 => {
    if (arr2.includes(item1)) {
      if (!(newArr.includes(item1))) {
        newArr.push(item1)
      }
    }

  });
  console.log(newArr);
}

testFunction(array1, array2)


