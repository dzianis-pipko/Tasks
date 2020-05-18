invertTwo = (arr) => arr
   .map((item, index) => (arr[index] < 0) ? arr[index] = arr[index] * -1 : arr[index] = arr[index] * -1);

invertTwo([-1, -2, -4, -5]); //== [1,2,4,5]
invertTwo([1, 2, 4, 5]); //== [-1,-2,-4,-5]
invertTwo([1, -2, 4, -5]); //== [-1,2,-4,5]