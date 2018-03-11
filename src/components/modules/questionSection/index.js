import React, { Component } from 'react';
import textToSpeech from '../textToSpeech';
import shuffleArray from '../shuffleArray';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import * as CONSTANTS from './constants';
import { withStyles } from 'material-ui/styles';
import styles from './styles';
import Progress from 'react-progressbar';
// import correctSound from '../../../sounds/correctSound1.mp3';
// import incorrectSound from '../../../sounds/incorrectSound.mp3';

class MainBit extends Component {
	constructor(props) {
		super(props);
		this.state = {
			vocabList: shuffleArray(this.props.vocabList),
			listLength: this.props.vocabList.length,
			currentWordIndex: 0,
			progressPercentage: 0,
		};
	}

	componentDidMount() {
		this.props.updateCurrentWord(this.state.vocabList[0]);
		textToSpeech(this.state.vocabList[0].korean[0]);
	}

	updateWordProgressHandler() {
		this.updateProgressBar();
		this.updateWordHandler();
		this.setState({ currentWordIndex: this.state.currentWordIndex + 1 });
	}

	updateProgressBar() {
		const newProgressPercntage =
			(this.state.currentWordIndex + 1) / this.state.listLength * 100;
		this.setState({ progressPercentage: newProgressPercntage });
	}

	updateWordHandler() {
		const { updateCurrentWord } = this.props;
		const newWordObj = this.state.vocabList[this.state.currentWordIndex + 1];
		updateCurrentWord(newWordObj);
		textToSpeech(newWordObj.korean);
	}

	correctAnswer() {
		const { currentWord, answerBox, mode } = this.props;
		if (
			currentWord.english.indexOf(answerBox) > -1 &&
			mode === CONSTANTS.KOREAN
		) {
			return true;
		}
		if (
			currentWord.korean.indexOf(answerBox) > -1 &&
			mode === CONSTANTS.ENGLISH
		) {
			return true;
		}
		return false;
	}

	onModeClickHandler() {
		const { mode, changeMode } = this.props;
		mode === CONSTANTS.KOREAN
			? changeMode(CONSTANTS.ENGLISH)
			: changeMode(CONSTANTS.KOREAN);
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
		} = this.props;
		if (this.correctAnswer()) {
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
		} = this.props;
		if (this.state.currentWordIndex < this.state.listLength - 1) {
			this.updateWordProgressHandler();
			updateAnswerAttempt(CONSTANTS.NONE);
			toggleContinue();
		} else {
			history.push("/summary");
		}
	}

	onSkipHandler() {
		const {
			totalPlusOne,
			updateIncorrectWordList,
			currentWord,
			history,
		} = this.props;
		if (this.state.currentWordIndex < this.state.listLength - 1) {
			this.updateWordProgressHandler();
			updateIncorrectWordList(currentWord);
			totalPlusOne();
		} else {
			history.push("/summary");
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
		} = this.props;

		return (
			<div style={styles.app}>
				<header style={styles.appHeader}>
					<h3 style={styles.scoreText}>
						SCORE: {score} / {totalWords}
					</h3>
					<div style={styles.vocabBox}>
						<h1 style={{ fontSize: 50 }}>
							{mode === CONSTANTS.KOREAN ? (
								currentWord.korean[0]
							) : (
								currentWord.english[0]
							)}
						</h1>
						{answerAttempt === CONSTANTS.CORRECT && (
							<Icon className="material-icons" style={styles.correctAnswer}>
								done
							</Icon>
						)}
						{answerAttempt === CONSTANTS.INCORRECT && (
							<Icon className="material-icons" style={styles.incorrectAnswer}>
								clear
							</Icon>
						)}
					</div>
					<Button
						style={{ color: 'gray' }}
						onClick={() => textToSpeech(currentWord.korean)}
					>
						<Icon className="material-icons" style={{ color: 'gray' }}>
							volume_up
						</Icon>
					</Button>
					<Progress completed={this.state.progressPercentage} />
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
						<div
							style={{
								display: 'flex',
								flexDirection: 'row',
								width: '100%',
								justifyContent: 'space-between',
							}}
						>
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
										? this.onContinueHandler()
										: this.onCheckClickHandler()}
							>
								{showContinue ? (
									CONSTANTS.CONTINUE_LABEL
								) : (
									CONSTANTS.CHECK_LABEL
								)}
							</Button>
						</div>
					</div>
					<Button
						style={styles.changeModeButton}
						onClick={() => this.onModeClickHandler()}
					>
						{mode === CONSTANTS.KOREAN ? (
							CONSTANTS.KTOELABEL
						) : (
							CONSTANTS.ETOKLABEL
						)}
					</Button>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(MainBit);
