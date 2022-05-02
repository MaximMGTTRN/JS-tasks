

const testFunction = (val) => { 
  const letter = 'x'
  const newArr = []
  for (let i = 0; i < val; i++) {
    newArr.push(letter.repeat(i+1))  
  }
  
  console.log(newArr);
}

testFunction(7)