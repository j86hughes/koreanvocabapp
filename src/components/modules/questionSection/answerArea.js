import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import * as CONSTANTS from './constants';
import styles from './styles';

class AnswerArea extends Component {
  constructor(props) {
		super(props);
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
      multiList,
      mode,
      multiMode
    } = this.props;

    const myStyle = {
      borderRadius: 5,
      display: 'flex',
      justifyContent: 'center',
      height: 200,
      width: 200,
      color: 'yellow',
      backgroundColor: 'blue',
      alignItems: 'center',
      // width: '50%',
    }

    const selectedStyle = {
      backgroundColor: 'green',
      color: 'white',
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

          {multiMode && multiList.length > 0 &&
          (<div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: 20}}>
              <div
                style={this.state.selectedBlock === 0 ? {...myStyle, ...selectedStyle} : myStyle}
                onClick={() => {
                  selectBlock(0);
                  updateTextBox(multiList[0][this.getOppositeMode()][0]);
                }}
                >
                {multiList[0][this.getOppositeMode()][0]}
              </div>
              <div style={{width: 20}}></div>
              <div
                style={this.state.selectedBlock === 1 ? {...myStyle, ...selectedStyle} : myStyle}
                onClick={() => {
                  selectBlock(1);
                  updateTextBox(multiList[1][this.getOppositeMode()][0]);
                }}
                >
                {multiList[1][this.getOppositeMode()][0]}
              </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
              <div
                style={this.state.selectedBlock === 2 ? {...myStyle, ...selectedStyle} : myStyle}
                onClick={() => {
                  selectBlock(2);
                  updateTextBox(multiList[2][this.getOppositeMode()][0]);
                }}
                >
                {multiList[2][this.getOppositeMode()][0]}
              </div>
              <div style={{width: 20}}></div>
              <div
                style={this.state.selectedBlock === 3 ? {...myStyle, ...selectedStyle} : myStyle}
                onClick={() => {
                  selectBlock(3);
                  updateTextBox(multiList[3][this.getOppositeMode()][0]);
                }}
                >
                {multiList[3][this.getOppositeMode()][0]}
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
              onClick={() => {
                showContinue ? onContinueHandler() : onCheckClickHandler();
                this.setState({selectedBlock: null});
              }
                }
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
