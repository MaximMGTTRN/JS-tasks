const user ={
  name: 'test',
  age: 34,
 country: 'RF'
}

const testFunction = (obj) =>{
  let newArr = []
  for(let key in  obj) {
    newArr.push(key)
  }
  return newArr
}

const result = testFunction(user)
console.log(result)


///GOOD