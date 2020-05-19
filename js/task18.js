const palindrom = (str) => {
   let a = str.split('').reverse().join('');
   return (a == str) ? `${str} => true` : `${str} => false`;
};

palindrom('abcdcdcba');
palindrom('hello');