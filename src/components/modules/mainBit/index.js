import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ACTIONS from '../../../redux/modules';
import textToSpeech from '../textToSpeech';
import shuffleArray from '../shuffleArray';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import * as CONSTANTS from './constants';
import { withStyles } from 'material-ui/styles';
import styles from './styles';
import correctSound from '../../../sounds/correctSound1.mp3';
import incorrectSound from '../../../sounds/incorrectSound.mp3';

class MainBit extends Component {

	constructor(props) {
    super(props);
    this.state = {
			vocabList: shuffleArray(this.props.vocabList),
			listLength: this.props.vocabList.length,
			currentWordIndex: 0,
		};
  }

	componentDidMount() {
		this.props.updateCurrentWord(this.state.vocabList[0]);
		textToSpeech(this.state.vocabList[0].korean[0]);
	}

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
			vocabList,
		} = this.props;

		const correctAnswer = () => {
			if ((currentWord.english.indexOf(answerBox) > -1) && mode === CONSTANTS.KOREAN) {
				return true;
			}
			if ((currentWord.korean.indexOf(answerBox) > -1) && mode === CONSTANTS.ENGLISH) {
				return true;
			}
			return false;
		}

		const onCheckClickHandler = () => {
			if (correctAnswer()) {
				scorePlusOne();
				toggleContinueAction();
				updateAnswerAttempt(CONSTANTS.CORRECT);
			} else {
				updateAnswerAttempt(CONSTANTS.INCORRECT);
			}
			totalPlusOne();
		};

		const onContinueHandler = () => {
			if (this.state.currentWordIndex < this.state.listLength - 1) {
				const newWordObj = this.state.vocabList[this.state.currentWordIndex + 1];
				toggleContinueAction();
				updateCurrentWord(newWordObj);
				textToSpeech(newWordObj.korean);
				updateAnswerAttempt(CONSTANTS.NONE);
				this.setState({currentWordIndex: this.state.currentWordIndex + 1});
			} else {
				alert('TOO LATE NAA MATE');
			}
		}

		const onSkipHandler = () => {
			if (this.state.currentWordIndex < this.state.listLength - 1) {
				const newWordObj = this.state.vocabList[this.state.currentWordIndex + 1];
				updateCurrentWord(newWordObj);
				textToSpeech(newWordObj.korean);
				totalPlusOne();
				this.setState({currentWordIndex: this.state.currentWordIndex + 1});
			} else {
				alert('TOO LATE NAA MATE');
			}
		}

		const onModeClickHandler = () => {
			mode === CONSTANTS.KOREAN ? changeMode(CONSTANTS.ENGLISH) : changeMode(CONSTANTS.KOREAN)
		};

		return (
			<div style={styles.app}>
				<header style={styles.appHeader}>
					<h3 style={styles.scoreText}>
						SCORE: {score} / {total}
					</h3>
					<div style={styles.vocabBox}>
						<h1 style={{fontSize: 50}}>{mode === CONSTANTS.KOREAN ? currentWord.korean[0] : currentWord.english[0]}</h1>
						{answerAttempt === CONSTANTS.CORRECT && <Icon className="material-icons" style={styles.correctAnswer}>done</Icon>}
						{answerAttempt === CONSTANTS.INCORRECT && <Icon className="material-icons" style={styles.incorrectAnswer}>clear</Icon>}
					</div>
					<Button
						style={{color: 'gray'}}
						onClick={() => textToSpeech(currentWord.korean)}>
						<Icon className="material-icons" style={{color: 'gray'}}>volume_up</Icon>
					</Button>
				</header>
				<div style={styles.answerSectionContainer}>
					<div style={styles.inputContainer}>
						<input
							type="text"
							style={styles.input}
							onChange={e => {
								updateTextBox(e.target.value.trim());
							}}
						/>
						<div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
							<Button
								style={!showContinue ? styles.skipButton : styles.skipButtonDisabled}
								disabled={showContinue}
								onClick={() => onSkipHandler()}
							>
								Skip
							</Button>
							<Button
								style={!showContinue ? styles.checkButton : styles.continueButton}
								onClick={() =>
									showContinue ? onContinueHandler() : onCheckClickHandler()
								}
							>
								{showContinue ? CONSTANTS.CONTINUE_LABEL : CONSTANTS.CHECK_LABEL}
							</Button>
						</div>
					</div>
					<Button
						style={styles.changeModeButton}
						onClick={() => onModeClickHandler()}
					>
						{mode === 'korean' ? CONSTANTS.KTOELABEL : CONSTANTS.ETOKLABEL}
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
		vocabList: state.vocabList,
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
