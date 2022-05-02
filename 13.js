// provereno

const array1 = ['a', 'b', 'c', 'd', 'e', 'f']

const testFunction = (arr, val) => {
  let finalArr = []
  let newArr = []
  for (let i = 0; i < arr.length + 1; i++) {
    if (newArr.length < val) {
      newArr.push(arr[i])
    } else {
      finalArr.push(newArr)
      newArr = [];
      newArr.push(arr[i])
    }
  }

  console.log(finalArr)

}

testFunction(array1, 3)


