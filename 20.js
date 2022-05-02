const str1 = 'http://www.figma.com'
const str2 = 'https://www.figma.com'

const testFunction = (str) => {
  let result = false
  str.startsWith('https') ? result = true : result = false

  console.log(result)
}

testFunction(str1)
testFunction(str2)
