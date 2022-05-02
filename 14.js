const array1 = [6, 3, 8, 2, 6, 8, 2, 5, 7, 2, 6, 8, 6, 2, 6]

const testFunction = (arr) => {
  let count = 0
  let maxCount = 0
  let maxIndex = 0

  arr.forEach((item, index) => {
    arr.forEach((item1, index1) => {
      if (item === item1) {
        count++
        // console.log(count)
      }
    })

    if (maxCount < count) {
      maxCount = count
      count = 0
      maxIndex = index
    } else {
      count = 0
    }
  });
  console.log(arr[maxIndex])
}

testFunction(array1)