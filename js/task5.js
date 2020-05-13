pin = (str) => {
   let strArr = str.split('').map((item) => Number(item));
   if (strArr.length == 4 || strArr.length == 6) {
      return (strArr.includes(NaN)) ? false : true;
   } else {
      return false;
   }
};

pin('1234');
pin('12345');
pin('12d456');
pin('12d4g67');
pin('123456');
pin('werq');