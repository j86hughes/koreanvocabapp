import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import AnswerArea from './answerArea';
import getMultiList from './utils/getMultiList';
import getOtherMeanings from './utils/getOtherMeanings';
import isCorrectAnswer from './utils/isCorrectAnswer';
import * as CONSTANTS from './constants';
import { withStyles } from 'material-ui/styles';
import styles from './styles';

class MainBit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWordIndex: 0,
      progressPercentage: 0
    };
  }

  componentDidMount() {
    const { updateCurrentWord, updateMultiList, vocabList } = this.props;
    const newMultiList = getMultiList(vocabList[0], vocabList);
    vocabList && updateCurrentWord(vocabList[0]);
    vocabList && updateMultiList(newMultiList);
  }

  updateWordProgressHandler() {
    const { vocabList } = this.props;
    this.setState({
      progressPercentage: this.updateProgressBar(
        this.state.currentWordIndex,
        vocabList.length
      )
    });
    this.setState({ currentWordIndex: this.state.currentWordIndex + 1 });
    this.updateWordAndMultiHandler();
  }

  updateProgressBar(currentWordIndex, listLength) {
    return ((currentWordIndex + 1) / listLength) * 100;
  }

  updateWordAndMultiHandler() {
    const { updateCurrentWord, updateMultiList, mode, vocabList } = this.props;
    const newWordObj = vocabList[this.state.currentWordIndex + 1];
    const newMultiList = getMultiList(newWordObj, vocabList);
    updateCurrentWord(newWordObj, mode);
    updateMultiList(newMultiList);
  }

  onCheckClickHandler() {
    const {
      scorePlusOne,
      toggleContinue,
      updateAnswerAttempt,
      totalPlusOne,
      updateCorrectWordList,
      updateIncorrectWordList,
      currentWord,
      answerBox,
      mode
    } = this.props;
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

  onContinueHandler() {
    const {
      toggleContinue,
      updateAnswerAttempt,
      history,
      updateTextBox,
      vocabList
    } = this.props;
    if (this.state.currentWordIndex < vocabList.length - 1) {
      this.updateWordProgressHandler();
      updateAnswerAttempt(CONSTANTS.NONE);
      toggleContinue();
      updateTextBox('');
    } else {
      history.push('/summary');
    }
  }

  onSkipHandler() {
    const {
      totalPlusOne,
      updateIncorrectWordList,
      currentWord,
      history,
      updateTextBox,
      vocabList
    } = this.props;
    if (this.state.currentWordIndex < vocabList.length - 1) {
      this.updateWordProgressHandler();
      updateIncorrectWordList(currentWord);
      totalPlusOne();
      updateTextBox('');
    } else {
      history.push('/summary');
    }
  }

  render() {
    const {
      currentWord,
      updateTextBox,
      mode,
      score,
      totalWords,
      showContinue,
      answerAttempt,
      answerBox,
      vocabList,
      multiList,
      multiMode
    } = this.props;

    return (
      <div style={styles.app}>
        {currentWord.hasOwnProperty('id') && (
          <div style={styles.app}>
            <Header
              score={score}
              totalWords={totalWords}
              mode={mode}
              currentWord={currentWord}
              answerAttempt={answerAttempt}
              progressPercentage={this.state.progressPercentage}
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
              onCheckClickHandler={() => this.onCheckClickHandler()}
              onContinueHandler={() => this.onContinueHandler()}
              onSkipHandler={() => this.onSkipHandler()}
              answerBox={answerBox}
            />
          </div>
        )}
      </div>
    );
  }
}

MainBit.propTypes = {
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

export default withStyles(styles)(MainBit);
