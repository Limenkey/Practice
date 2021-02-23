const convertToRoman = (num) => {

let decimalArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
let romanArr = [
    "M"  ,
    "CM" ,
    "D"  ,
    "CD" ,
    "C"  ,
    "XC" ,
    "L"  ,
    "XL" ,
    "X"  ,
    "IX" ,
    "V"  ,
    "IV" ,
    "I"
];
let romanised = "";

for (let i = 0; i < decimalArr.length; i++) {
    while (num >= decimalArr[i]){
        romanised += romanArr[i];
        num -= decimalArr[i];
    }
}
}

convertToRoman(87);


/*
1.create an array with decimals
2.create an array with romans
3.create an variable to store romanised
4.create a loop subtracting decimals from the number




 */
