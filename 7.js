let str1 = 'abctestabctext'
let str2 = 'testabctext'

const changeLetter = (str) =>{
  if(str.startsWith('abc')){
    str = str.replace('abc', 'www')
   } else { 
    str = str + 'zzz'
   }
return str
}

const result1 = changeLetter(str1)
const result2 = changeLetter(str2)
console.log(result1, result2)

///GOOD +-