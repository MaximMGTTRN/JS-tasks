const array1 = [9, 5, 2, 6, 23, 6, 8, 1, 9, 2]

const array2 = [9, 5, 2, 6, -23, 6, 8, 1, 9, 2, 0]

const testFunction = (arr) => {
  let result = false
  let count = 0

  arr.forEach(item => {
    if (item > 0) {
      count++
    }
  });

  count === arr.length ? result = true : result = false

  console.log(result);
}

testFunction(array1)
testFunction(array2)