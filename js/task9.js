class Simple {
   constructor(params) {
      this.word = params;
   }

   processing() {
      let arr = this.word.split(' ')
         .map((item) => item.length);
      return `Длинна самого короткоко слова = ${Math.min.apply(null, arr)}`;
   }
}
let str = new Simple('Chargoggagoggmanchauggagoggchaubunagungamaugg hippopotomonstrosesquipedaliophobia');
str.processing();


// Вариант 2

SimpleTwo = (params) => {
   let arr = params.split(' ')
      .map((item) => item.length);
   return `Длинна самого короткоко слова = ${Math.min.apply(null, arr)}`;
};

let strTwo = 'This is my car';
SimpleTwo(strTwo);