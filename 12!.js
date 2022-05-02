const array1 = [
  { name: 'test', price: 200 },
  { name: 'test1', price: 300 },
  { name: 'test', price: 100 },
  { name: 'test', price: 600 }
]

const testFunction = (arr) => {
  const newArr = []
  
  arr.forEach(item => {
    item.forEach(item1 =>{
      console.log(item1);
    })
    
  });

}

console.log();
testFunction(array1)


////////////// NE RESHEN