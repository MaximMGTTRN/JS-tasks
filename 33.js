const str1 = 'https://underscorejs.org?a=4&b=8'
const str2 = 'https://underscorejs.org?id=123&limit=5&offset=0'

const testFunction = (str) => {
  let newArr = []
  let newStr = ''
  const newObj = {}
  let block = []

  if (str.includes('?')) {
    newStr = str.slice(str.indexOf('?') + 1)
    newArr = newStr.split('&')
    // console.log(newArr);
  }

  newArr.forEach(item => {
    block = item.split('=')
    // console.log(block);
    newObj[block[0]] = block[1]
    // console.log('obj =',newObj);
  });

  console.log(newObj);
}


testFunction(str1)
testFunction(str2)