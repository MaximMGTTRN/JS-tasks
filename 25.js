const str1 = 'abcetgbabctest'

const testFunction = (str) => {
  const newStr = str.replaceAll('a', 'A').replaceAll('b', 'B')
  console.log(newStr) 
}

testFunction(str1)