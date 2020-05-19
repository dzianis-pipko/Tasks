const newStr = (str) => str
   .split(' ')
   .sort((a, b) => stringToNumber(a) - stringToNumber(b))
   .join(' ');

const stringToNumber = (str) => {
   let numEl = '';
   for (let index in str) {
      if (parseInt(str[index])) {
         numEl += str[index];
      }
   }
   return parseInt(numEl);
};

newStr('is2 Thi1s T4est 3a');