const str1 = 'abcbacabcbcabcbabaa'
const str2 = 'abcbacabcqbcabcbnaba'

const testFunction = (str) => {
  newStr = [...str]
  let count = 0
  let result = false

  newStr.forEach(item => {
    if (item === 'a' || item === 'b' || item === 'c') {
      count++
    }
    
  });

  count === str.length ? result = true : result = false
  console.log(result)
}

testFunction(str1)
testFunction(str2)