const telephoneCheck = (str) => {
  const phoneNum = str.replace(/[^0-9]/gi, ''),
        indexOfOne = str.indexOf("1"),
        locations = (substring,string) => {
            let arr=[],
                i=-1;
            while((i=string.indexOf(substring,i+1)) >= 0) arr.push(i);
            return arr.join("");
        },
        lBrIndex = locations("(",str),
        rBrIndex = locations(")",str),
        hyphenIndex = locations("-",str),
        spaceIndex = locations(" ",str);

    if (phoneNum.length === 10 && str.length >= 10 && str.length <= 15) {
      if (lBrIndex == "" && rBrIndex == "") {
        return true
      } else if (lBrIndex == 0 && rBrIndex == 4){
        return true
      } else {
        return false
      }

    } else if (phoneNum.length === 11 && indexOfOne == 0) {
      if (lBrIndex == "" && rBrIndex == "") {
        return true
      } else if (lBrIndex == 1 && rBrIndex == 5){
        return true
      } else if (lBrIndex == 2 && rBrIndex == 6) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
}
telephoneCheck("555-555-5555");

//1. check if the string contains only numbers
//2. create if conditions for lengths of 10,12,13,14
//3. check the index of 1 if it's greater than 0 return false
//4. check if the string contains only numbers
