import Hangul from 'hangul-js';


const grammartron = () => {
  const word = '가다';

  const noDa = word.split('');
  //remove '다'
  noDa.pop();

  //get last char from word
  const lastChar = noDa[noDa.length - 1];

  let hanArray = Hangul.disassemble(lastChar);
  const lastHan = hanArray[hanArray.length - 1];
  console.log('lastHan', lastHan);

  let finalChar;
  let yah;
  let allButLastChar = noDa.slice(0, noDa.length - 1).join('');

  if (!Hangul.endsWithConsonant(lastChar)) {
    switch (lastHan) {
      case 'ㅏ':
        yah = allButLastChar + lastChar;
        break;

      case 'ㅗ':
        yah = allButLastChar + Hangul.assemble([...hanArray, 'ㅏ']);
        break;

      case 'ㅓ':
        yah = allButLastChar + lastChar;
        break;

      case 'ㅜ':
        yah = allButLastChar + Hangul.assemble([...hanArray, 'ㅓ']);
        break;

      case 'ㅣ':
        hanArray.pop();
        finalChar = Hangul.assemble([...hanArray, 'ㅕ']);
        yah = allButLastChar + finalChar;
        break;

      default:
        break;
    }
  } else {
    switch (lastHan) {
      case 'ㅂ':
        hanArray.pop();
        yah = allButLastChar + Hangul.assemble([...hanArray]) + '워';
        break;

      default:
        break;
    }
  }

  let glory = yah + '요';

  console.log('GLORY', glory);
  return glory;
}

export default grammartron;
