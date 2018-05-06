import Hangul from 'hangul-js';


const grammartron = () => {
  const word = '타다';

  const splitWord = word.split('');
  //remove '다'
  splitWord.pop();

  //get last char from word
  const lastChar = splitWord[splitWord.length - 1];

  let charArray = Hangul.disassemble(lastChar);
  const lastHan = charArray[charArray.length - 1];
  console.log('charArray', charArray);

  let finalChar;
  let yah;

  if (!Hangul.endsWithConsonant(lastChar)) {
    if (splitWord.length === 1) {
      switch (lastHan) {
        case 'ㅏ':
          yah = lastChar;
          break;

        case 'ㅗ':
          yah = Hangul.assemble([...charArray, 'ㅏ']);
          break;

        case 'ㅣ':
          charArray.pop();
          let allButLastCharArray = splitWord.slice(0, splitWord.length - 1);
          let allButLastChar = allButLastCharArray.join('');
          finalChar = Hangul.assemble([...charArray, 'ㅕ']);
          yah = allButLastChar + finalChar;
        default:
          break;
      }
    }
  }

  let glory = yah + '요';

  console.log('GLORY', glory);
  return glory;
}

export default grammartron;
