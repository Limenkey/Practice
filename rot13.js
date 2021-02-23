const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const rot13 = (str) => {

  return str
            .split("")
            .map(char => {
              const abcIndex = abc.indexOf(char);
             return abcIndex != -1 ? abc[(abcIndex + 13) % 26] : char
             })
            .join("")
}

rot13("SERR PBQR PNZC");

console.log(rot13("SERR PBQR PNZC"))

/*
1.create a string of letters
2.convert str into an array
3.get the index of the character
4.get the new character (characterIndex + 13) % 26 if the index isn't equal to -1
5.convert the array into a string


*/
