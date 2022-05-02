const array1 = [['cat', 5], ['dog', 6], ['cat', 11]]
const array2 = [['name', 'test'], ['age', 12], ['country', 'RF']]

const testFunction = (arr1) => {
  const newObj = {}

  arr1.forEach(item => {
    newObj[item[0]] = item[1]
  });
  console.log(newObj);
}

testFunction(array1)
testFunction(array2)
