
const sortElements = (arr, direction) =>{
  if (direction === 'asc') {
    return sortUp(arr)
  } if (direction === 'desc') {
    return sortDown(arr)
  } else {
    console.log('You are made a mistake...')
  }
}

const sortUp = (arr) =>{
  if(arr.length <= 1) {
    return arr
  }
  let midIndex = Math.floor(arr.length / 2)
  let midElm = arr[midIndex]
  let less = []
  let greater = []
    for( let i = 0; i < arr.length; i++){
      if(i === midIndex)
        continue
      if(arr[i] < midElm){
        less.push(arr[i])
      } else {
        greater.push(arr[i])
      }
    }
    return[...sortUp(less),midElm,...sortUp(greater)]
}

const sortDown = (arr) =>{
  if(arr.length <= 1) {
    return arr
  }
  let midIndex = Math.floor(arr.length / 2)
  let midElm = arr[midIndex]
  let less = []
  let greater = []
    for( let i = 0; i < arr.length; i++){
      if(i === midIndex)
        continue
      if(arr[i] < midElm){
        less.push(arr[i])
        console.log('1', less)
      } else {
        greater.push(arr[i])
        console.log('2',greater)
      }
    }
    return[...sortDown(greater),midElm,...sortDown(less)]
}

let elements = [6, 43, -6, 3, 0, 5, 2, 7];
const sortedArray = sortElements(elements, 'desc');
console.log(sortedArray);


///GOOD