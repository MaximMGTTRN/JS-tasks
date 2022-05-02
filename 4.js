let str1 = 'test education part 2'
let str2 = 'text'

const testFunction = (str) => {
  let newStr = ''
  if(str.length > 5 ){
    newStr = str.slice(0, 3) + str.slice(-3)
    
  } else {
    for(let i = 0; i < 5; i++){
      newStr += str[0]
    }
  }
  return newStr
}

const result1 = testFunction(str1)
const result2 = testFunction(str2)
console.log(result1, result2)


///GOOD