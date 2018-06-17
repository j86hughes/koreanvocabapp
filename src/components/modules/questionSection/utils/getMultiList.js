import shuffleArray from './../../../../redux/utils/shuffleArray';

const getMultiList = (currentWord, vocabList) => {
  let multiList = [];

  const notInMulti = (word) => {
    for(let it = 0; it < multiList.length; it++) {
      if (word.id === multiList[it].id) {
        return false;
      }
    }
    return true;
  };

  if(currentWord !== undefined && currentWord.hasOwnProperty('id')) {

    for(let it = 0; it < 3; it++) {
      let shuffleOrig = shuffleArray(vocabList);
      let notCurrentWord = shuffleOrig.find(word => (word.id !== currentWord.id && notInMulti(word)));
      multiList.push(notCurrentWord);
    }

    multiList.push(currentWord);
  }

  return shuffleArray(multiList);
}

export default getMultiList;
