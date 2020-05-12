message = (str) => {
   return str.split(' ')
      .map(item => item.replace(/[AEIOUаоыиэяюёе]/gi, ''))
      .join(' ');
};

message('Этот сайт для неудачников LOL!');
message('This webste is for lusers LOL!');