findNextSquare = (sq) => {
   let n = Math.sqrt(sq);

   return (Math.ceil(n) - n > 0) ? -1 : Math.pow(n + 1, 2);
};

findNextSquare(121);
findNextSquare(625);
findNextSquare(114);