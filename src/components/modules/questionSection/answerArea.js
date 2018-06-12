import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import * as CONSTANTS from './constants';
import styles from './styles';

class AnswerArea extends Component {

  render() {
    const {
      updateTextBox,
      showContinue,
      onCheckClickHandler,
      onContinueHandler,
      onSkipHandler,
      answerBox,
      OneRightThreeWrong,
    } = this.props;

    const answerBlockArray = OneRightThreeWrong();
    console.log('YAHAAAAAA', OneRightThreeWrong().map(item => item));

    return (
      <div style={styles.answerSectionContainer}>
        <div style={styles.inputContainer}>
          <input
            type="text"
            style={styles.input}
            onChange={e => updateTextBox(e.target.value)}
            value={answerBox}
          />
          {/* <div style={{display: 'flex'}}>
            <div style={{display: 'flex', justifyContent: 'center', height: 100, width: 100, color: 'yellow', backgroundColor: 'blue', alignItems: 'center'}}>
              {OneRightThreeWrong()[0].korean[0]}
            </div>
            <div style={{display: 'flex', justifyContent: 'center', height: 100, width: 100, color: 'yellow', backgroundColor: 'blue', alignItems: 'center'}}>
              {OneRightThreeWrong()[1].korean[0]}
            </div>
          </div>
          <div style={{display: 'flex'}}>
            <div style={{display: 'flex', justifyContent: 'center', height: 100, width: 100, color: 'yellow', backgroundColor: 'blue', alignItems: 'center'}}>
              {OneRightThreeWrong()[2].korean[0]}
            </div>
            <div style={{display: 'flex', justifyContent: 'center', height: 100, width: 100, color: 'yellow', backgroundColor: 'blue', alignItems: 'center'}}>
              {OneRightThreeWrong()[3].korean[0]}
            </div>
          </div> */}
          <div style={styles.buttonContainer}>
            <Button
              style={
                !showContinue ? styles.skipButton : styles.skipButtonDisabled
              }
              disabled={showContinue}
              onClick={() => onSkipHandler()}
            >
              Skip
            </Button>
            <Button
              style={
                !showContinue ? styles.checkButton : styles.continueButton
              }
              onClick={() =>
                showContinue
                  ? onContinueHandler()
                  : onCheckClickHandler()}
            >
              {showContinue ? (
                CONSTANTS.CONTINUE_LABEL
              ) : (
                CONSTANTS.CHECK_LABEL
              )}
            </Button>
          </div>
        </div>
      </div>
    )
  }
}


AnswerArea.propTypes = {
  updateTextBox: PropTypes.func.isRequired,
  showContinue: PropTypes.bool.isRequired,
  onCheckClickHandler: PropTypes.func.isRequired,
  onContinueHandler: PropTypes.func.isRequired,
  onSkipHandler: PropTypes.func.isRequired,
  answerBox: PropTypes.string.isRequired,
}

export default AnswerArea
