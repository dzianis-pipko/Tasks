arrayDiff = (arr1, arr2) => arr1
   .filter(item => !arr2.join('').includes(item));


arrayDiff([1, 2], [1, 2, 6]);
arrayDiff([1, 2, 2, 2, 3], [2, 5]);