const array1 = [{ name: 'width', value: 300 }, { name: 'height', value: 100 }]

const testFunction = (arr) => {
  const newObj = {}

  // for (let i = 0 ; i < (arr.length/2); i++)  {
  //   for(let key in arr[i]){
  //     console.log(key, arr[i][key]);
  //     // newObj[arr[i][key]]=arr[i][key]
  //     // console.log(newObj,'newObj')
  //   }
  // }

  arr.forEach((item, i) => {
    for (let key in item) {
      console.log(key, item[key]);
      newObj[item[key]] = 
      console.log(newObj, 'newObj')
    }
  });

  console.log(newObj)
}

testFunction(array1)