const returnOtherMeanings = (currentWord, mode, vocabList) => {
  const matchingWordObjs = vocabList.filter(obj => {
    if(currentWord[mode] !== undefined && obj.id !== currentWord.id) {
      for(let i = 0; i < obj[mode].length; i++) {
        for(let it = 0; it < currentWord[mode].length; it++) {
          return obj[mode][i] === currentWord[mode][it];
        }
      }
    }
    return null;
  })
  return matchingWordObjs.map(obj => {
    if(mode === 'english') {
      return obj.korean[0];
    } else {
      return obj.english[0];
    }
  });
};

export default returnOtherMeanings;
