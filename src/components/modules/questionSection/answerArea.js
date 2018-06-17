import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import * as CONSTANTS from './constants';
import styles from './styles';

class AnswerArea extends Component {
  constructor(props) {
		super(props);
    const {getMultiList} = this.props;
		this.state = {
      selectedBlock: null,
		}
	}

  getOppositeMode = () => {
    const { mode } = this.props;
    return mode === 'english' ? 'korean' : 'english';
  }

  render() {
    const {
      updateTextBox,
      showContinue,
      onCheckClickHandler,
      onContinueHandler,
      onSkipHandler,
      answerBox,
      getMultiList,
      mode,
      multiMode
    } = this.props;

    const myStyle = {
      display: 'flex',
      justifyContent: 'center',
      height: 100,
      width: 100,
      color: 'yellow',
      backgroundColor: 'blue',
      alignItems: 'center',
      width: '50%',
    }

    const selectBlock = (number) => {
      this.setState({
        selectedBlock: number,
      })
    }

    return (
      <div style={styles.answerSectionContainer}>
        <div style={styles.inputContainer}>
          {!multiMode && (<input
            type="text"
            style={styles.input}
            onChange={e => updateTextBox(e.target.value)}
            value={answerBox}
          />)}

          {multiMode &&
          (<div>
            <div style={{display: 'flex'}}>
              <div
                style={this.state.selectedBlock === 0 ? {...myStyle, backgroundColor: 'green'} : myStyle}
                onClick={() => selectBlock(0)}
                >
                {this.state.answerBlockArray[0][this.getOppositeMode()][0]}
              </div>
              <div
                style={this.state.selectedBlock === 1 ? {...myStyle, backgroundColor: 'green'} : myStyle}
                onClick={() => selectBlock(1)}
                >
                {this.state.answerBlockArray[1][this.getOppositeMode()][0]}
              </div>
            </div>
            <div style={{display: 'flex'}}>
              <div
                style={this.state.selectedBlock === 2 ? {...myStyle, backgroundColor: 'green'} : myStyle}
                onClick={() => selectBlock(2)}
                >
                {this.state.answerBlockArray[2][this.getOppositeMode()][0]}
              </div>
              <div
                style={this.state.selectedBlock === 3 ? {...myStyle, backgroundColor: 'green'} : myStyle}
                onClick={() => selectBlock(3)}
                >
                {this.state.answerBlockArray[3][this.getOppositeMode()][0]}
              </div>
            </div>
          </div>)}

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
