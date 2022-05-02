const array1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const testFunction = (arr) => {
  const num = arr[Math.floor(Math.random() * 10)] 
  console.log(num);
}
// console.log(Math.floor(Math.random() * 10));
testFunction(array1)