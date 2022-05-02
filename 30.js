const array1 = [5, 7, 2, 9, 5, 6, 3, 1, 8]

const testFunction = (arr) => {
  const newArr = [...arr]
  let maxNumI = 0
  let minNumI = 0
  let maxNum = 0
  let minNum = arr[0]

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i]
      maxNumI = i
      console.log('maxNumI', maxNumI)

    } if (arr[i] < minNum) {
      minNum = arr[i]
      minNumI = i
      console.log('minNumI', minNumI)
    }
    console.log(minNum, maxNum)
  }

  newArr.splice(minNumI, 1, maxNum)
  newArr.splice(maxNumI, 1, minNum)
  console.log(newArr)
}

testFunction(array1)