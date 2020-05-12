accum = (str) => {
   return str.toLowerCase()
      .split('')
      .map((item, index) => (index == 0) ? item : item.repeat(index + 1))
      .map(item => item[0].toUpperCase() + item.slice(1))
      .join('-');
};

accum("abcd"); //-> "A-Bb-Ccc-Dddd"
accum("RqaEzty"); //-> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt"); //-> "C-Ww-Aaa-Tttt"


// Вариант 2

accumTwo = (str) => {
   let arr = [];
   str.toLowerCase()
      .split('')
      .reduce((iterator, item) => (iterator == 0) ? arr.push(item) : arr.push(item.repeat(iterator + 1)), 0);
   return arr.map(item => item[0].toUpperCase() + item.slice(1)).join('-');

};

accumTwo("abcd"); //-> "A-Bb-Ccc-Dddd"
accumTwo("RqaEzty"); //-> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accumTwo("cwAt"); //-> "C-Ww-Aaa-Tttt"