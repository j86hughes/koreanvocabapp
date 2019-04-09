import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import AnswerArea from './answerArea';
import getMultiList from './utils/getMultiList';
import getOtherMeanings from './utils/getOtherMeanings';
import isCorrectAnswer from './utils/isCorrectAnswer';
import * as CONSTANTS from './constants';
import { withStyles } from 'material-ui/styles';
import styles from './styles';

const QuestionSection = ({
  updateCurrentWord,
  updateMultiList,
  vocabList,
  mode,
  scorePlusOne,
  toggleContinue,
  updateAnswerAttempt,
  totalPlusOne,
  updateCorrectWordList,
  updateIncorrectWordList,
  currentWord,
  answerBox,
  updateTextBox,
  score,
  totalWords,
  showContinue,
  history,
  answerAttempt,
  multiList,
  multiMode,
  classes,
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [progressPercentage, setProgressPercentage] = useState(0);

  useEffect(() => {
    const newMultiList = getMultiList(vocabList[0], vocabList);
    vocabList && updateCurrentWord(vocabList[0]);
    vocabList && updateMultiList(newMultiList);
  }, [])

  const updateProgressBar = (currentWordIndex, listLength) => {
    return ((currentWordIndex + 1) / listLength) * 100;
  }

  const updateWordAndMultiHandler = () => {
    const newWordObj = vocabList[currentWordIndex + 1];
    const newMultiList = getMultiList(newWordObj, vocabList);
    updateCurrentWord(newWordObj, mode);
    updateMultiList(newMultiList);
  }

  const updateWordProgressHandler = () => {
    setProgressPercentage(updateProgressBar(currentWordIndex, vocabList.length));
    setCurrentWordIndex(currentWordIndex + 1);
    updateWordAndMultiHandler();
  }

  const onCheckClickHandler = () => {
    if (isCorrectAnswer(currentWord, answerBox, mode)) {
      scorePlusOne();
      updateAnswerAttempt(CONSTANTS.CORRECT);
      updateCorrectWordList(currentWord);
    } else {
      updateAnswerAttempt(CONSTANTS.INCORRECT);
      updateIncorrectWordList(currentWord);
    }
    totalPlusOne();
    toggleContinue();
  }

  const onContinueHandler = () => {
    if (currentWordIndex < vocabList.length - 1) {
      updateWordProgressHandler();
      updateAnswerAttempt(CONSTANTS.NONE);
      toggleContinue();
      updateTextBox('');
    } else {
      history.push('/summary');
    }
  }

  const onSkipHandler = () => {
    if (currentWordIndex < vocabList.length - 1) {
      updateWordProgressHandler();
      updateIncorrectWordList(currentWord);
      totalPlusOne();
      updateTextBox('');
    } else {
      history.push('/summary');
    }
  }

  return currentWord.hasOwnProperty('id') ? (
    <div className={classes.app}>
      <Header
        score={score}
        totalWords={totalWords}
        mode={mode}
        currentWord={currentWord}
        answerAttempt={answerAttempt}
        progressPercentage={progressPercentage}
        returnOtherMeanings={() =>
          getOtherMeanings(currentWord, mode, vocabList)
        }
      />
      <AnswerArea
        multiMode={multiMode}
        mode={mode}
        multiList={multiList}
        updateTextBox={e => updateTextBox(e)}
        showContinue={showContinue}
        onCheckClickHandler={() => onCheckClickHandler()}
        onContinueHandler={() => onContinueHandler()}
        onSkipHandler={() => onSkipHandler()}
        answerBox={answerBox}
      />
    </div>
  ) : null
}

QuestionSection.propTypes = {
  updateCurrentWord: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
  currentWord: PropTypes.object.isRequired,
  answerBox: PropTypes.string.isRequired,
  scorePlusOne: PropTypes.func.isRequired,
  toggleContinue: PropTypes.func.isRequired,
  updateAnswerAttempt: PropTypes.func.isRequired,
  totalPlusOne: PropTypes.func.isRequired,
  updateCorrectWordList: PropTypes.func.isRequired,
  updateIncorrectWordList: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  updateTextBox: PropTypes.func.isRequired
};

export default withStyles(styles)(QuestionSection);
