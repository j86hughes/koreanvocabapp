import React from 'react';
import Button from 'material-ui/Button';
import * as CONSTANTS from './constants';
import styles from './styles';

const AnswerArea = ({
  currentWord,
  updateTextBox,
  mode,
  score,
  totalWords,
  showContinue,
  answerAttempt,
  onCheckClickHandler,
  onContinueHandler,
}) => (
  <div style={styles.answerSectionContainer}>
    <div style={styles.inputContainer}>
      <input
        type="text"
        style={styles.input}
        onChange={e => updateTextBox(e.target.value.trim())}
      />
      <div style={styles.buttonContainer}>
        <Button
          style={
            !showContinue ? styles.skipButton : styles.skipButtonDisabled
          }
          disabled={showContinue}
          onClick={() => this.onSkipHandler()}
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
);

export default AnswerArea
