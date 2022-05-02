let users = [
  { name: 'test', age: 34, country: 'RF' },
  { name: '', age: null, country: '' },
  { name: 'test1', age: null, country: '' },
  { name: '', age: 12, country: '' },
  { name: '', age: null, country: 'RF' }
]

const filterFunction = (arr) => {
  const liveUsers = []

  arr.forEach(element => {
    for (let key in element) {
      if (Boolean(element[key])) {
        liveUsers.push(element)
        return
      }
    }
  });
  return liveUsers
}

const result = filterFunction(users)
console.log(result)


console.log(Boolean(null))