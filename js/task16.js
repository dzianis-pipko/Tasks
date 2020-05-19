stringReverse = (str) => str
   .split(' ')
   .map(item => item.split('').reverse().join(''))
   .join(' ');

stringReverse('This is an example!'); // -> sihT si na !elpmaxe