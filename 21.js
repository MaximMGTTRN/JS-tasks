const array1 = ['text', 'education', 'part', '2', 'exceed', 'team']

const inArray = (val, arr) => {
  let result = false

  arr.forEach(item => {
    if (item === val) {
      result = true
      return result
    }
  });

  console.log(result)
}

inArray('test', array1)
inArray('exceed', array1)

