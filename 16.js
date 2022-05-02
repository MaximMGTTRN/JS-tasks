const array = [
  { name: 'test', age: 34, country: 'RF' },
  { name: 'test2', age: 12, country: 'RF' },
  { name: 'test1', age: 54, country: 'RF' }
]

const testFunction = (arr, val1, type) => {
  const newArr = [...arr]

  if (type === 'desc') {
    newArr.forEach((element, index) => {
      // console.log(element[val1], index)
      newArr.forEach((item, i) => {
        if (element[val1] > item[val1]) {
          let data = element[val1]
          element[val1] = item[val1]
          item[val1] = data
        }
      })
    });
  } else {
    newArr.forEach((element, index) => {
      // console.log(element[val1], index)
      newArr.forEach((item, i) => {
        if (element[val1] < item[val1]) {
          let data = element[val1]
          element[val1] = item[val1]
          item[val1] = data
        }
      })
    });
  }

  console.log(newArr)
}

testFunction(array, 'age', '')