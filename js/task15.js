functSort = (str) => {
   let b = [];
   str.split(' ').forEach((item) => {
      for (let i in item) {
         if (parseInt(item[i])) {
            b.push(item[i]);
         }
      }
   });
   return `${b} ---- ${str}`;
};


console.log(functSort('is2 Thi1s T4est 3a')); //-> Thi1s is2 3a T4est