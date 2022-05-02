const str1 = 'text education exceed.team part 2 for test'

const testFunction = (str) => {
  strArr = str.split(' ')
  let count = 0
  let maxCount = 0
  let indexMax = 0

  strArr.forEach((item, index) => {

    for (let i = 0; i < item.length; i++) {
      if (item[i]) count++
    }

    if (maxCount < count) {
      maxCount = count
      indexMax = index
    }

    count = 0
  });

  return strArr[indexMax]
}

const result = testFunction(str1)
console.log(result)
