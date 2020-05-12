accum = (str) => {
   return str.toLowerCase()
      .split('')
      .map((item, index) => (index == 0) ? item : item.repeat(index + 1))
      .map(item => item[0].toUpperCase() + item.slice(1))
      .join('-');
}

accum("abcd"); //-> "A-Bb-Ccc-Dddd"
accum("RqaEzty"); //-> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt"); //-> "C-Ww-Aaa-Tttt"