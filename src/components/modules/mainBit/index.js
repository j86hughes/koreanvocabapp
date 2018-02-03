import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ACTIONS from '../../../redux/modules';
import textToSpeech from '../textToSpeech';
import wordsArray from '../greetings';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import { withStyles } from 'material-ui/styles';
import styles from './styles';

class MainBit extends Component {
	render() {
		const {
			answerBox,
			currentWord,
			updateTextBox,
			updateCurrentWord,
			scorePlusOne,
			totalPlusOne,
			mode,
			score,
			total,
			changeMode,
			showContinue,
			toggleContinueAction,
			updateAnswerAttempt,
			answerAttempt,
		} = this.props;
		const kToELabel = '한국어 => English';
		const eToKLabel = 'English => 한국어';
		const ENGLISH = 'english';
		const KOREAN = 'korean';
		const CONTINUE_LABEL = 'Continue';
		const CHECK_LABEL = 'Check';
		const CORRECT = 'correct';
		const INCORRECT = 'incorrect';
		const NONE = 'none';

		const randomWordObjGen = (array) => {
			return array[Math.floor(Math.random() * array.length)];
		};

		const correctAnswer = () => {
			if (answerBox === currentWord.english && mode == KOREAN) {
				return true;
			}
			if (answerBox === currentWord.korean && mode == ENGLISH) {
				return true;
			}
			return false;
		}

		const onCheckClickHandler = () => {
			if (correctAnswer()) {
				scorePlusOne();
				toggleContinueAction();
				updateAnswerAttempt(CORRECT);
			} else {
				updateAnswerAttempt(INCORRECT);
			}
			totalPlusOne();
		};

		const onContinueHandler = () => {
			const newWordObj = randomWordObjGen(wordsArray);
			toggleContinueAction();
			updateCurrentWord(newWordObj);
			textToSpeech(newWordObj.korean);
			updateAnswerAttempt(NONE);
		}

		const onModeClickHandler = () => {
			mode == KOREAN ? changeMode(ENGLISH) : changeMode(KOREAN)
		};

		return (
			<div style={styles.app}>
				<header style={styles.appHeader}>
					<h3 style={styles.scoreText}>
						SCORE: {score} / {total}
					</h3>
					<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
						<h1 style={{fontSize: 50}}>{mode === KOREAN ? currentWord.korean : currentWord.english}</h1>
						{answerAttempt === CORRECT && <Icon className="material-icons" style={{color: 'lightGreen', fontSize: '50pt'}}>done</Icon>}
						{answerAttempt === INCORRECT && <Icon className="material-icons" style={{color: 'red', fontSize: '50pt'}}>clear</Icon>}
					</div>
					<Button
						style={{color: 'gray'}}
						onClick={() => textToSpeech(currentWord.korean)}>
						<Icon className="material-icons" style={{color: 'gray'}}>volume_up</Icon>
					</Button>
				</header>
				<div style={styles.answerSectionContainer}>
					<input
						type="text"
						style={styles.input}
						onChange={e => {
							updateTextBox(e.target.value);
						}}
					/>
					<Button
						style={!showContinue ? styles.checkButton : styles.continueButton}
						onClick={() =>
							showContinue ? onContinueHandler() : onCheckClickHandler()
						}
					>
						{showContinue ? CONTINUE_LABEL : CHECK_LABEL}
					</Button>
					<Button
						style={styles.changeModeButton}
						onClick={() => onModeClickHandler()}
					>
						{mode === 'korean' ? kToELabel : eToKLabel}
					</Button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		answerBox: state.AnswerBox,
		currentWord: state.UpdateWord,
		score: state.Score,
		total: state.TotalWords,
		mode: state.Mode,
		showContinue: state.ShowContinue,
		answerAttempt: state.AnswerAttempt,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		updateTextBox: text => dispatch(ACTIONS.AnswerBox.updateTextBox(text)),
		updateCurrentWord: wordObj => dispatch(ACTIONS.UpdateWord.updateCurrentWord(wordObj)),
		scorePlusOne: () => dispatch(ACTIONS.Score.scorePlusOne()),
		totalPlusOne: () => dispatch(ACTIONS.TotalWords.totalPlusOne()),
		changeMode: mode => dispatch(ACTIONS.Mode.changeMode(mode)),
		toggleContinueAction: () => dispatch(ACTIONS.ShowContinue.showContinue()),
		updateAnswerAttempt: (attempt) => dispatch(ACTIONS.AnswerAttempt.updateAnswerAttempt(attempt)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MainBit));
