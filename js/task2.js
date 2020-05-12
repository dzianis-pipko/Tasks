message = (str) => {
   return str.split(' ')
      .map(item => item.replace(/[AEIOUаоыиэяюёе]/gi, ''))
      .join(' ');
};

console.log(message('Этот сайт для неудачников LOL!'));
console.log(message('This webste is for lusers LOL!'));