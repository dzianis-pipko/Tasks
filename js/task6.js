printer_error = (str) => {
   let strArr = str.split('').map((item) => (item > 'm') ? false : true);
   let arrErrors = [];
   for (let key of strArr) {
      if (!key) arrErrors.push(key);
   }
   return `${arrErrors.length}/${strArr.length}`;

}

printer_error('aaaxbbbbyyhwawiwjjjwwm');
printer_error('aaabbbbhaijjjm');
printer_error('aaabbbbhaijjjmnnnpqrstuzzzm');



// abcdefghijklm
// nopqrstuvwxyz