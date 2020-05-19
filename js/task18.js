const palindrom = (str) => {
   let a = str.split('').reverse().join('');
   return (a == str) ? `${str} => true` : `${str} => false`;
};

console.log(palindrom('abcdcdcba'));
console.log(palindrom('hello'));