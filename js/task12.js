arrayDiff = (arr1, arr2) => {
   return arr1.filter(item => item != arr2[0])
};

arrayDiff([1, 2], [1]); //== [2]
arrayDiff([1, 2, 2, 2, 3], [2]); //== [1,3]