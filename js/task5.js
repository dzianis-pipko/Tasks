pin = (str) => {
   let strArr = str.split('').map((item) => Number(item));
   return ((strArr.length == 4 || strArr.length == 6) && !(strArr.includes(NaN))) ? true : false;
};


pin('1234');
pin('12345');
pin('12d456');
pin('12d4g67');
pin('123456');
pin('1e3q');