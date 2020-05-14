String.prototype.toJadenCase = function (str) {
   return str.split(' ').map((item) => item[0].toUpperCase() + item.slice(1)).join(' ');
};

let text = 'I have the ninety video on my phone.';
let textTwo = 'I made a song last night.';

text.toJadenCase(text);
textTwo.toJadenCase(textTwo);