const str1 = 'text education part 2'

const testFunction = (str, val) => {
  let newStr = str.slice(0, val) + '...'
  console.log(newStr)
}

testFunction(str1, 6)