numbersDescending = (n) => {
   let arr = [];
   while (n) {
      arr.push(n);
      n--;
   }
   return arr.join(',');
};

numbersDescending(5);