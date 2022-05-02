const user = {
  name: 'test',
  age: 34,
  country: 'RF'
}


const testFunction = (obj) => {
  const keyArr = []
  const dataArr = []

  for (let key in obj) {
    // console.log(key, 'item' , obj[key])
    keyArr.push(key)
    dataArr.push(obj[key])

  }
  console.log(keyArr)
  console.log(dataArr)
  return (keyArr, dataArr)
}

const result = testFunction(user)
console.log(result)

