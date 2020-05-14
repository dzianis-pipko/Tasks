arrayCount = (params) => {
   let max = Math.max.apply(null, params);
   let min = Math.min.apply(null, params);
   return `Min: ${min}, Max: ${max}`;
};

let arr = [1, 2, 3, -4, 5, 6, 7, 8, 9, 55];
arrayCount(arr);