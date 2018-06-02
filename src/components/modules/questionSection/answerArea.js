import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import * as CONSTANTS from './constants';
import styles from './styles';

const AnswerArea = ({
  updateTextBox,
  showContinue,
  onCheckClickHandler,
  onContinueHandler,
  onSkipHandler,
  answerBox,
}) => (
  <div style={styles.answerSectionContainer}>
    <div style={styles.inputContainer}>
      <input
        type="text"
        style={styles.input}
        onChange={e => updateTextBox(e.target.value)}
        value={answerBox}
      />
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

AnswerArea.propTypes = {
  updateTextBox: PropTypes.func.isRequired,
  showContinue: PropTypes.bool.isRequired,
  onCheckClickHandler: PropTypes.func.isRequired,
  onContinueHandler: PropTypes.func.isRequired,
  onSkipHandler: PropTypes.func.isRequired,
  answerBox: PropTypes.string.isRequired,
}

export default AnswerArea
