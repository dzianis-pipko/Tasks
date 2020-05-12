list = (strNumbers) => {
   let strNumbersArray = strNumbers.split(' ').sort((a, b) => a - b);
   return `${strNumbersArray.pop()} ${strNumbersArray.shift()}`;
};

list("4 5 29 54 4 0 -123 666 -64 1 -3 6 -6");