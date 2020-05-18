stringReverse = (str) => str
   .split(' ')
   .map(item => item.split('').reverse().join(''))
   .join(' ');

console.log(stringReverse('This is an example!')); // -> sihT si na !elpmaxe