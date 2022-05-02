const str1 = 'abdfj'
const str2 = 'hello'

const testFunction = (str) => {
  let count = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] < str[i + 1]) {
      count++
      // console.log(count);
    }
  }

  count === (str.length -1) ? console.log('Yes'): console.log('No');
}

testFunction(str1)
testFunction(str2)