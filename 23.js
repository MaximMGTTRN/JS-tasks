const str1 = '__|----|_|-|____|--'

const str2 = '--|_|-|___|--'

const testFunction = (str) => {
  const newStr = str.replaceAll('_', '0').replaceAll('-', '1')
    .replaceAll('|', '')

  console.log(newStr)
}

testFunction(str1)
testFunction(str2)
