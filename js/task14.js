arrayNumbers = (arr) => {
   let min = Math.min.apply(null, arr);
   let a = arr.indexOf(min, 0);
   arr.splice(a, 1);
   let minTwo = Math.min.apply(null, arr);
   return min + minTwo;
};

arrayNumbers([12, 423, 54, 1235, 3, 15, 2, 52]); //=> 5