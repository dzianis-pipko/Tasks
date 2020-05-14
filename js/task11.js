invert = (arr) => {
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
         arr[i] = arr[i] * -1;
      } else {
         arr[i] = arr[i] * -1;
      }
   }
   return arr;
};

invert([-1, -2, -4, -5]); //== [1,2,4,5]
invert([1, 2, 4, 5]); //== [-1,-2,-4,-5]
invert([1, -2, 4, -5]); //== [-1,2,-4,5]