const palindrome = (str) => {
  let loweredWord = str.toLowerCase();
  let originalWord = loweredWord.replace(/[^0-9a-z]/gi, '')
  console.log(originalWord)

  let splitWord = originalWord.split("")
  let reversedArr = splitWord.reverse()
  let reversedWord = reversedArr.join("")
  console.log(reversedWord)

if (originalWord == reversedWord){
  return true;
} else {
  return false
}
}


palindrome("1 eye for of 1 eye.");




/* 1. remove all non-abc chars from the string save it into a variable
   2. reverse the string => save it into another variable
   3. compare the variables
   4. return boolean



 */
