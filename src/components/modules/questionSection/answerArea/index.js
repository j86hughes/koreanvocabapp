import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import MultiChoice from './multiChoice';
import * as CONSTANTS from '../constants';
import styles from '../styles';

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

  selectBlock = (number) => {
    this.setState({
      selectedBlock: number,
    })
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

    return (
      <div style={styles.answerSectionContainer}>
        <div style={styles.inputContainer}>

          <div style={{display: 'flex', flexDirection: 'column', flexGrow: 1}}>
            {multiMode && multiList.length > 0 &&
            (<MultiChoice
              selectedBlock={this.state.selectedBlock}
              multiList={multiList}
              selectBlock={this.selectBlock.bind(this)}
              updateTextBox={updateTextBox}
              getOppositeMode={this.getOppositeMode.bind(this)}
            />)}

            {!multiMode && (<input
              type="text"
              style={styles.input}
              onChange={e => updateTextBox(e.target.value)}
              value={answerBox}
            />)}
          </div>

          <div>
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
